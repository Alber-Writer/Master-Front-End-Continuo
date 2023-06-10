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
  currentHeight:number;

  constructor(private galleryFeedService: GalleryFeedService) {
    this.isPlaying = false;
    this.startPlayerInterval;
    this.lastImage = 1;
    this.currentHeight = 600;
  }

  ngOnInit(): void {
    this.galleryFeedService.getAllImages().then((data) => {
      this.imagesGallery = [...data];
      this.setCurrentImage(0);
      this.lastImage = this.imagesGallery.length - 1;
    });
  }

  setCurrentImage(position: number) {

    //Controls button states and force accepted Index
    const prevButton = this.manageClassFromId('prev');
    const nextButton = this.manageClassFromId('next');
    prevButton('remove', 'disabled');
    nextButton('remove', 'disabled');

    //intermediate index
    if (position > 0 && position < this.lastImage) {
      this.currentIndex = position;
    }
    //first index
    if (position <= 0) {
      prevButton('add', 'disabled');
      this.currentIndex = 0;
    }
    if (position >= this.lastImage) {
      nextButton('add', 'disabled');
      this.currentIndex = this.lastImage;
    }
    //angular ya te da IDs...
    return (this.currentImage = { ...this.imagesGallery[this.currentIndex] });
  }

  selectedAsCurrent(e: any) {
    const clickedId = Number(e.target.getAttribute('data-img-id'));
    const position = this.imagesGallery.findIndex(
      (el) => el['id'] === clickedId
    );
    this.setCurrentImage(position);
  }

  manageClassFromId(htmlId: string) {
    const htmlElement = document.getElementById(htmlId);
    return function (
      operation: 'add' | 'remove' | 'toggle' = 'toggle',
      className: string
    ) {
      htmlElement?.classList?.[operation](className);
    };
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.startPlayerInterval = setInterval(() => {
        const ifLastOne =
          this.currentIndex === this.lastImage ? 0 : this.currentIndex + 1;
        this.setCurrentImage(ifLastOne);
      }, 2000);
    }
  }

  stop() {
    if (this.isPlaying) {
      clearInterval(this.startPlayerInterval);
      this.isPlaying = false;
    }
  }

  zoomIn(){
    this.currentHeight += 25;
  }

  zoomOut(){
    this.currentHeight -= 25;
  }
}

// ### Al empezar, se mostrará una de las imágenes en la parte de Imagen seleccionada.
// ### Al hacer click en una imagen de la lista, la imagen correspondiente se mostrará en la parte de imagen seleccionada.
// ### Al hacer click en el botón siguiente, se cambiará la imagen seleccionada por la siguiente de la lista.
// ### Se pondrá “disabled” el botón siguiente cuando la imagen seleccionada sea la última de la lista.
// ### Al hacer click en el botón anterior, se cambiará la imagen seleccionada por la anterior de la lista.
// ### Se pondrá “disabled” el botón anterior cuando la imagen seleccionada sea la primera de la lista.
// ### Al hacer click en el botón Aumentar, se agrandará el tamaño de la imagen seleccionada.
// ### Al hacer click en el botón Disminuir, se reducirá el tamaño de la imagen seleccionada.
// ### Al hacer click en el botón Play, se “pondrá en marcha el reproductor”, es decir, la imagen seleccionada empezará a cambiar cada 2 segundos. Cuando el reproductor llegue a la última imagen volverá a empezar por la primera.
// ### Al hacer click en el botón Stop, se detendrá el reproductor, es decir, la imagen seleccionada dejará de cambiar cada 2 segundos.
// ### El botón de Stop solamente se mostrará cuando esté en marcha el reproductor.
// ### El botón de Play solamente se mostrará cuando el reproductor esté detenido.
// RETOS
//
// ### Remarcar con estilos css la imagen de la lista que corresponda con la imagen actualmente seleccionada
//
// Paginar el listado de imágenes. En vez de mostrar todas las imágenes de golpe, mostrarlas de 3 en 3. Añadir un botón Anterior y otro siguiente para avanzar o retroceder de “página” en el listado.
//
// Ayuda: La pipe slice trocea un array Ejemplo: En <img *ngFor="let image of images | slice:3:6" /> la pipe slice haría return de los elementos 3, 4 y 5 del array images.
//
// slice:0:3 => Empezaría en el 0 y terminaría en el 3 pero sin incluir el 3. slice:3:6 => Empezaría en el 3 y terminaría en el 6 pero sin incluir el 6. slice:6:9 => Empezaría en el 6 y terminaría en el 9 pero sin incluir el 9.

