import { WeekdayEnum } from '../enums/weekday.enum';
import { GenreEnum } from '../enums/genre.enum';
import { ShowStatusEnum } from '../enums/show-status.enum';
import { ICountry } from './country.interface';
import { ShowTypeEnum } from '../enums/show-type.enum';
import { INetwork } from './network.interface';

export interface IShow {
  id: number;
  url: string;
  name: string;
  type: ShowTypeEnum;
  language: string;
  genres: GenreEnum[];
  status: ShowStatusEnum;
  runtime: number | null;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string | null;
  schedule: { time: string; days: WeekdayEnum[]; };
  rating: { average: number | null; };
  weight: number;
  network: INetwork | null;
  webChannel: INetwork | null;
  dvdCountry: ICountry | null;
  externals: { tvrage: number; thetvdb: number | null; imdb: string | null; };
  image: { medium: string; original: string; } | null;
  summary: string;
  updated: number;
  _links: { self: { href: string; }; previousepisode: { href: string; } }
}
