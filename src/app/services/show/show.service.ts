import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IShow } from '../../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../helpers/api.config';
import { TShowByGenre } from '../../types/show-by-genre.type';
import { UTIL } from '../../utils/util';
import { IShowSearchResult } from '../../interfaces/show-search-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  latestShows$: BehaviorSubject<IShow[]> = new BehaviorSubject<IShow[]>([]);
  lastSearchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private static url = `${BASE_API_URL}/shows`;
  private static searchUrl = `${BASE_API_URL}/search/shows?q=`;

  constructor(private _http: HttpClient) {
  }

  getList: () => Observable<IShow[]> = () => this._http.get<IShow[]>(`${ShowService.url}`)
    .pipe(tap(list => this.latestShows$.next(list)));

  getListByGenre: () => Observable<Partial<TShowByGenre>> =
    () => this.getList().pipe(map(showList => UTIL.groupShowsByGenre(showList)));

  getShowDetails: (showId: number) => Observable<IShow> =
    showId => this._http.get<IShow>(`${ShowService.url}/${showId}`);

  search: (searchTerm: string) => Observable<IShow[]> = (searchTerm) => {
    this.lastSearchTerm$.next(searchTerm);
    return this._http.get<IShowSearchResult[]>(`${ShowService.searchUrl}${searchTerm}`)
      .pipe(map(results => results.map(result => result.show)));
  };

}
