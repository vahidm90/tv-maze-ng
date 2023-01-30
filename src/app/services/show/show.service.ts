import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IShow } from '../../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../helpers/api.config';
import { TShowByGenre } from '../../types/show-by-genre.type';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private _http: HttpClient) {
  }

  getList: () => Observable<IShow[]> = () => this._http.get<IShow[]>(`${BASE_API_URL}/shows`);

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

}
