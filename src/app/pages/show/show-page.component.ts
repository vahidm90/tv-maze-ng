import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SHOW_PATH_PARAM_NAME } from '../../helpers/route.config';
import { ShowService } from '../../services/show/show.service';
import { IShow } from '../../interfaces/show.interface';

@Component({
  selector: 'tvm-show',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  hasErrors: boolean = false;
  showDetails!: IShow;
  showId!: number;

  private _destroy$ = new Subject<void>();

  constructor(private _route: ActivatedRoute, private _showService: ShowService) {
  }

  ngOnInit() {
    this.showId = parseInt(this._route.snapshot.paramMap.get(SHOW_PATH_PARAM_NAME) as string, 10);
    this.updateShowDetails();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateShowDetails: () => void = () => {
    this.isLoading = true;
    this.hasErrors = false;
    this._showService.getShowDetails(this.showId)
      .pipe(takeUntil(this._destroy$), finalize(() => this.isLoading = false))
      .subscribe({
        next: showDetails => this.showDetails = showDetails,
        error: (_: unknown) => this.hasErrors = true
      });

  };

}
