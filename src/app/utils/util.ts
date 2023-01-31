import { IShow } from '../interfaces/show.interface';
import { TShowByGenre } from '../types/show-by-genre.type';

export const UTIL: {
  sanitizeSearchTerm: (input: string) => string;
  groupShowsByGenre: (shows: IShow[]) => Partial<TShowByGenre>;
} = {
  sanitizeSearchTerm: input => {
    return input.replace(/[^\w\s]/g, '').trim();
  },
  groupShowsByGenre: shows => {
    if (!shows.length) return {};
    const listByGenre: Partial<TShowByGenre> = { Miscellaneous: [] };
    shows.forEach(show => {
      if (show.genres.length)
        show.genres.forEach(genre => listByGenre[genre] = [...(listByGenre[genre] ?? []), show]);
      else
        listByGenre.Miscellaneous?.push(show);
    });
    return listByGenre;
  }
};
