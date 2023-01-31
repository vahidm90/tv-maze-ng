import { Component, Input } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';

@Component({
  selector: 'tvm-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent {

  @Input() show!: IShow;

}
