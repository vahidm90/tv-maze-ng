import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SHOW_PATH_PARAM_NAME } from '../../helpers/route.config';

@Component({
  selector: 'tvm-show',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;

  private _destroy$ = new Subject<void>();

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const showId = parseInt(this._route.snapshot.paramMap.get(SHOW_PATH_PARAM_NAME) as string, 10);
    console.log(showId);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
