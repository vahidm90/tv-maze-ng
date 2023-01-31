import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShowService } from '../../services/show/show.service';
import { TShowByGenre } from '../../types/show-by-genre.type';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tvm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  showsByGenre!: Partial<TShowByGenre>;
  isLoading = true;
  hasErrors = false;
  private _destroy$ = new Subject<void>();

  constructor(private _showService: ShowService) {
  }

  ngOnInit() {
    this.updateShows();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateShows: () => void = () => {
    this.isLoading = true;
    this.hasErrors = false;
    this._showService.getListByGenre()
      .pipe(takeUntil(this._destroy$), finalize(() => this.isLoading = false))
      .subscribe({
        next: listByGenre => this.showsByGenre = listByGenre as TShowByGenre,
        error: (_: unknown) => this.hasErrors = true
      });
  };
}
