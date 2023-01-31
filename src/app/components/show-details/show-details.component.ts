import { Component, Input, OnInit } from '@angular/core';
import { IShow } from '../../interfaces/show.interface';
import { DEFAULT_IMAGE } from '../../helpers/default-image.config';

@Component({
  selector: 'tvm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input() showDetails!: IShow;

  src!: string;

  ngOnInit() {
    this.src = this.showDetails.image?.original || DEFAULT_IMAGE;
  }

}
