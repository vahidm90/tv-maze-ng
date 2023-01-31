import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, finalize, Subject, takeUntil } from 'rxjs';
import { ShowService } from '../../services/show/show.service';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { SHOW_SEARCH_QUERY_PARAM_NAME } from '../../helpers/route.config';
import { IShow } from '../../interfaces/show.interface';
import { UTIL } from '../../utils/util';

@Component({
  selector: 'tvm-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  searchTerm: string = '';
  results: IShow[] = [];
  isLoading = true;
  hasErrors = false;
  private _destroy$ = new Subject<void>();

  constructor(private _showService: ShowService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._showService.lastSearchTerm$
      .pipe(takeUntil(this._destroy$))
      .subscribe(searchTerm => this.searchTerm = searchTerm);
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd || event instanceof Scroll),
        takeUntil(this._destroy$))
      .subscribe(() => this.updateResults());

  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateResults: () => void = () => {
    this.isLoading = true;
    this.hasErrors = false;
    this.searchTerm = this._route.snapshot.queryParamMap.get(SHOW_SEARCH_QUERY_PARAM_NAME) as string;
    this._showService.search(this.searchTerm)
      .pipe(takeUntil(this._destroy$), finalize(() => this.isLoading = false))
      .subscribe({
        next: results => this.results = results,
        error: (_: unknown) => this.hasErrors = true
      });
  };

  onInputKeyUp: (event: KeyboardEvent) => void = event => {
    if (event.key === 'Enter') {
      const sanitizedTerm = UTIL.sanitizeSearchTerm(this.searchTerm);
      this._router.navigate(['.', 'search'], {
        queryParams: { [SHOW_SEARCH_QUERY_PARAM_NAME]: sanitizedTerm }
      });
    }
  };

}
