import { Injectable } from '@angular/core';
import { Image } from '../model/gallery-model';

const imagesFeed:Image[] = [
  {
    id: 101,
    src: '/assets/gallery_imgs/01.webp',
    title: 'Coast landscape',
  },
  {
    id: 2,
    src: './assets/gallery_imgs/02.webp',
    title: 'Sea landscape',
  },
  {
    id: 3,
    src: './assets/gallery_imgs/03.webp',
    title: 'Fisherman at evening',
  },
  {
    id: 4,
    src: './assets/gallery_imgs/04.webp',
    title: 'Mountain river landscape',
  },
  {
    id: 5,
    src: './assets/gallery_imgs/05.webp',
    title: 'Snow peaks',
  },
  {
    id: 6,
    src: './assets/gallery_imgs/06.webp',
    title: 'Airplane trail',
  },
  {
    id: 77,
    src: './assets/gallery_imgs/07.webp',
    title: 'Turntable',
  },
  {
    id: 8,
    src: './assets/gallery_imgs/08.webp',
    title: 'Macro cat nose',
  },
]

@Injectable({
  providedIn: 'root'
})
export class GalleryFeedService {
  getAllImages():Promise<Image[]>{
    return new Promise((resolve)=>resolve(imagesFeed));
  }
}
