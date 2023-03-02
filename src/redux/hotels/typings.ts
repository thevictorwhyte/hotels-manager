import { ICategory } from '../categories/typings';

export interface IHotelsState {
  hotels: IHotel[];
}

export interface IHotel {
  id: string;
  name: string;
  address: string;
  category?: ICategory | null;
}
