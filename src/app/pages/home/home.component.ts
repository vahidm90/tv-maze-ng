import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShowService } from '../../services/show/show.service';
import { TShowByGenre } from '../../types/show-by-genre.type';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tvm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  showsByGenre!: TShowByGenre;
  isLoading = true;
  hasErrors = false;
  destroy$ = new Subject<void>();

  constructor(private _showService: ShowService) {
  }

  ngOnInit() {
    this.updateShows();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateShows: () => void = () => {
    this.isLoading = true;
    this.hasErrors = false;
    this._showService.getListByGenre()
      .pipe(takeUntil(this.destroy$), finalize(() => this.isLoading = false))
      .subscribe({
        next: listByGenre => this.showsByGenre = listByGenre as TShowByGenre,
        error: (_: unknown) => this.hasErrors = true
      });
  };
}
