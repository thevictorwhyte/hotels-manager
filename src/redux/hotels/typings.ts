export interface IHotelsState {
  hotels: IHotel[];
}

export interface IHotel {
  id: string;
  name: string;
  address: string;
  category?: string | null;
}
