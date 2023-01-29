import { ICountry } from './country.interface';

export interface INetwork {
  id: number;
  name: string;
  country: ICountry | null;
  officialSite: string | null;
}
