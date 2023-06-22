import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective implements OnInit {
  @Input('rotate')
  rotate: string;
  @Input()
  step: string;
  private defaultStep: string;
  private acc: number;

  constructor(private el: ElementRef) {
    this.el = el;
    this.rotate = '0';
    this.defaultStep = '10';
    this.step = '0';
    this.acc = 0;
  }
  cssRotate(qty: number) {
    this.el.nativeElement.style.transform = `rotate(${qty}deg)`;
  }

  ngOnInit(): void {
    this.acc = Number(this.rotate);
    this.cssRotate(this.acc);
  }

  @HostListener('click', ['$event'])
  onMouseClick(event:MouseEvent) {
    const variation:number =  Number(this.step) || Number(this.defaultStep)
    this.cssRotate(event.shiftKey
      ? this.acc-= variation
      : this.acc += variation);
  }
}
