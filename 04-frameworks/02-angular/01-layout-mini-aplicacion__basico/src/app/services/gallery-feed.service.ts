import { Injectable } from '@angular/core';

export interface Image{
  id: number,
  src: string,
  title: string
}

const imagesFeed:Image[] = [
  {
    id: 101,
    src: '/assets/gallery_imgs/01.jpg',
    title: 'Coast landscape',
  },
  {
    id: 2,
    src: './assets/gallery_imgs/02.jpg',
    title: 'Sea landscape',
  },
  {
    id: 3,
    src: './assets/gallery_imgs/03.jpg',
    title: 'Fisherman at evening',
  },
  {
    id: 4,
    src: './assets/gallery_imgs/04.jpg',
    title: 'Mountain river landscape',
  },
  {
    id: 5,
    src: './assets/gallery_imgs/05.jpg',
    title: 'Snow peaks',
  },
  {
    id: 6,
    src: './assets/gallery_imgs/06.jpg',
    title: 'Airplane trail',
  },
  {
    id: 77,
    src: './assets/gallery_imgs/07.jpg',
    title: 'Turntable',
  },
  {
    id: 8,
    src: './assets/gallery_imgs/08.jpg',
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
