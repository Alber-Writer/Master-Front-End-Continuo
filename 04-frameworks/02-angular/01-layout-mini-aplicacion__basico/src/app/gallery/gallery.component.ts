import { Component, OnInit } from '@angular/core';
import { GalleryFeedService } from '../services/gallery-feed.service';
import { Image } from '../model/gallery-model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  itemCollection: Image[] = [];
  featuredImage: Image = {
    id: 0,
    src: '',
    title: '',
  };
  currentIndex: number = 0;
  featuredItemDomId: string;
  isPlaying: boolean;
  startPlayerInterval: any;
  lastItem: number;
  currentZoom: number;
  // pagination:
  paginateFrom: number;
  paginateTo: number;
  itemsPerPage: number;
  currentPage: number;
  lastPage: number;

  constructor(private galleryFeedService: GalleryFeedService) {
    this.isPlaying = false;
    this.startPlayerInterval;
    this.lastItem = 1;
    this.currentZoom = 1;
    this.featuredItemDomId = 'featured-image';
    //Pagination
    this.itemsPerPage = 3;
    this.paginateFrom = 0;
    this.paginateTo = this.itemsPerPage;
    this.currentPage = 0;
    this.lastPage = 1;
  }

  ngOnInit(): void {
    this.galleryFeedService.getAllImages().then((data) => {
      this.itemCollection = [...data];
      this.setFeaturedItem(0);
      this.lastItem = this.itemCollection.length - 1;
      this.lastPage = Math.floor(this.lastItem / this.itemsPerPage);
    });
  }
  // GALLERY management methods
  /**
   * @param {number} tryPosition The desired position (it accepts numbers below 0 and over lastItems),
   *  You can also use "currentIndex+1" || "currentIndex-1" to take into account
   *  the current Index in order to move relatively 'N' positions.
   **/
  setFeaturedItem(tryPosition: number) {
    if (tryPosition > 0 && tryPosition < this.lastItem)
      this.currentIndex = tryPosition;
    if (tryPosition <= 0) this.currentIndex = 0;
    if (tryPosition >= this.lastItem) this.currentIndex = this.lastItem;

    this.setPageByFeaturedItem();
    return (this.featuredImage = { ...this.itemCollection[this.currentIndex] });
  }

  selectAsCurrent(e: Event, attributeToMatch: string) {
    const { target } = e;
    const clickedId =
      Number((target as HTMLAnchorElement)?.getAttribute(attributeToMatch)) ?? 0;
    const position = this.itemCollection.findIndex((el) => el['id'] === clickedId);
    this.setFeaturedItem(position);
  }

  play(msInterval: number) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.startPlayerInterval = setInterval(() => {
        return this.currentIndex === this.lastItem
          ? this.setCurrentPage(0)
          : this.setFeaturedItem(this.currentIndex + 1);
      }, msInterval);
    }
  }

  stop() {
    if (this.isPlaying) {
      clearInterval(this.startPlayerInterval);
      this.isPlaying = false;
    }
  }

  setZoom(qty: number = 0.25) {
    this.currentZoom += qty;
    document.getElementById(
      this.featuredItemDomId
    )!.style.transform = `scale(${this.currentZoom})`;
  }

  // PAGINATION management methods
  /**
   * @param {number} tryPosition The desired position (accepts numbers even below 0 and over "lastItem" index),
   *  You can also use "this.currentPage+1" || "this.currentPage-1" in order to move relatively 'N' positions from currentPage.
   * @param {'first' | 'last'} itemSelected Choose which item will be marked as selected.
   **/
  setCurrentPage(
    tryPosition: number,
    itemSelected: 'first' | 'last' = 'first'
  ): void {
    if (tryPosition <= 0) this.currentPage = 0;
    if (tryPosition > 0 && tryPosition < this.lastPage)
      this.currentPage = tryPosition;
    if (tryPosition >= this.lastPage) this.currentPage = this.lastPage;
    this.paginateFrom = this.currentPage * this.itemsPerPage;
    this.paginateTo = this.paginateFrom + this.itemsPerPage;
    const imagePosition =
      itemSelected === 'first' ? this.paginateFrom : this.paginateTo - 1;
    this.setFeaturedItem(imagePosition);
  }

  setPageByFeaturedItem() {
    if (this.currentIndex === this.paginateTo)
      this.setCurrentPage(this.currentPage + 1);
    if (this.currentIndex === this.paginateFrom - 1 && this.paginateFrom > 0)
      this.setCurrentPage(this.currentPage - 1, 'last');
  }

  getItemIndexAtCurrentPage() {
    return this.currentIndex - this.paginateFrom;
  }
}
