import { GenreEnum } from '../enums/genre.enum';
import { IShow } from '../interfaces/show.interface';

export type TShowByGenre = Record<GenreEnum | 'Miscellaneous', IShow[]>;
