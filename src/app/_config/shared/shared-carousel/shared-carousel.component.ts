import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shared-carousel',
  templateUrl: './shared-carousel.component.html',
})
export class SharedCarouselComponent implements OnInit {
  @Input() images: Observable<string[]>;
  @Input() imagePath: string = '';
  constructor() { }

  ngOnInit() {
  }
  getUrl(image: string): string {
    return this.imagePath + image;
  }

}
