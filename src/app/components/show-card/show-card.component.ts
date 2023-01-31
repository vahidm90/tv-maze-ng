import { Component, Input, OnInit } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';
import { DEFAULT_IMAGE } from '../../helpers/default-image.config';

@Component({
  selector: 'tvm-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  @Input() show!: IShow;

  backgroundImage!: string;

  ngOnInit() {
    this.backgroundImage = `url(${this.show.image?.medium || DEFAULT_IMAGE})`;
  }

}
