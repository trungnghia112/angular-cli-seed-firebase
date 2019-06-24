import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private el: ElementRef,
              private render: Renderer2) {
  }

  /**
   * this.loadCSS('./assets/css/style.css');
   */
  loadCSS(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.type = 'text/css';
      styleElement.rel = 'stylesheet';
      styleElement.onload = resolve;
      this.render.appendChild(this.el.nativeElement, styleElement);
    });
  }
}
