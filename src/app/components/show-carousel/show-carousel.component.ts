import { Component, Input } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';

@Component({
  selector: 'tvm-carousel',
  templateUrl: './show-carousel.component.html',
  styleUrls: ['./show-carousel.component.scss']
})
export class ShowCarouselComponent {

  @Input() title!: string;

  @Input() shows!: IShow[];


}
