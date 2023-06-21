import { Component, OnInit } from '@angular/core';
import { GalleryFeedService, Image } from '../services/gallery-feed.service';

//members

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imagesGallery: Image[] = [];
  currentImage: Image = {
    id: 0,
    src: '',
    title: '',
  };
  currentIndex: number = 0;
  isPlaying: boolean;
  startPlayerInterval: any;
  lastImage: number;
  currentZoom: number;
  // pagination:
  paginateFrom: number;
  paginateTo: number;
  imgsPerPage: number;
  currentPage: number;
  lastPage: number;

  constructor(private galleryFeedService: GalleryFeedService) {
    this.isPlaying = false;
    this.startPlayerInterval;
    this.lastImage = 1;
    this.currentZoom = 1;
    //Pagination
    this.imgsPerPage = 3;
    this.paginateFrom = 0;
    this.paginateTo = this.imgsPerPage;
    this.currentPage = 0;
    this.lastPage = 1;
  }

  ngOnInit(): void {
    this.galleryFeedService.getAllImages().then((data) => {
      this.imagesGallery = [...data];
      this.setCurrentImage(0);
      this.lastImage = this.imagesGallery.length - 1;
      this.lastPage = Math.floor(this.lastImage / this.imgsPerPage);
    });
  }

  setCurrentImage(position: number) {
    if (position > 0 && position < this.lastImage) this.currentIndex = position;
    if (position <= 0) this.currentIndex = 0;
    if (position >= this.lastImage) this.currentIndex = this.lastImage;

    if(this.currentIndex === this.paginateTo) this.setCurrentPage(this.currentPage+1)
    if(this.currentIndex === (this.paginateFrom-1) && this.paginateFrom > 0) this.setCurrentPage(this.currentPage-1, "last")

    return (this.currentImage = { ...this.imagesGallery[this.currentIndex] });
  }

  selectedAsCurrent(e: any) {
    const clickedId = Number(e.target.getAttribute('data-img-id'));
    const position = this.imagesGallery.findIndex(
      (el) => el['id'] === clickedId
    );
    this.setCurrentImage(position);
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.startPlayerInterval = setInterval(() => {
          return this.currentIndex === this.lastImage
          ? this.setCurrentPage(0)
          : this.setCurrentImage(this.currentIndex + 1);
      }, 2000);
    }
  }

  stop() {
    if (this.isPlaying) {
      clearInterval(this.startPlayerInterval);
      this.isPlaying = false;
    }
  }

  zoomIn() {
    this.currentZoom += 0.25;
    document.getElementById('featured-image')!.style.transform = `scale(${this.currentZoom})`;
  }

  zoomOut() {
    this.currentZoom -= 0.25;
    document.getElementById('featured-image')!.style.transform = `scale(${this.currentZoom})`;
  }
  setCurrentPage(position: number, imgSelected:"first" | "last" = "first") {
    if (position <= 0) this.currentPage = 0;
    if (position > 0 && position < this.lastPage) this.currentPage = position;
    if (position >= this.lastPage) this.currentPage = this.lastPage;
    this.paginateFrom = this.currentPage * this.imgsPerPage;
    this.paginateTo = this.paginateFrom + this.imgsPerPage;
    const imagePosition = imgSelected === "first" ? this.paginateFrom : this.paginateTo-1;
    this.setCurrentImage(imagePosition);
  }
  getIndexAtPage(){
    return this.currentIndex - this.paginateFrom
  }
}
