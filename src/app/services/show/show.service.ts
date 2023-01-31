import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IShow } from '../../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../helpers/api.config';
import { TShowByGenre } from '../../types/show-by-genre.type';
import { UTIL } from '../../utils/util';

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
    () => this.getList().pipe(
      map(showList => {
        const listByGenre: Partial<TShowByGenre> = { Miscellaneous: [] };
        showList.forEach(show => {
          if (show.genres.length)
            show.genres.forEach(genre => listByGenre[genre] = [...(listByGenre[genre] ?? []), show]);
          else
            listByGenre.Miscellaneous?.push(show);
        });
        return showList.length ? listByGenre : {};
      })
    );

  getShowDetails: (showId: number) => Observable<IShow> =
    showId => this._http.get<IShow>(`${ShowService.url}/${showId}`);

  search: (searchTerm: string) => Observable<IShow[]> =
    (searchTerm) => {
      const sanitizedTerm = UTIL.sanitizeSearchTerm(searchTerm);
      this.lastSearchTerm$.next(sanitizedTerm);
      return this._http.get<IShow[]>(`${ShowService.searchUrl}${sanitizedTerm}`);
    };

}
