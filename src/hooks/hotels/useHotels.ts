import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHotel, deleteHotel, editHotel } from '../../redux/hotels/reducer';
import { selectHotelsList } from '../../redux/hotels/selectors';
import { IHotel } from '../../redux/hotels/typings';

interface Props {
  categoryId?: string;
}

const useHotels = ({ categoryId }: Props) => {
  const dispatch = useDispatch();
  const hotelsList = useSelector(selectHotelsList);
  const [groupedHotels, setGroupedHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    if (categoryId) {
      const _hotels = hotelsList.filter(
        (hotel) => hotel.category === categoryId
      );
      setGroupedHotels(_hotels);
    }
  }, [categoryId, hotelsList]);

  const addNewHotel = (hotel: IHotel) => {
    dispatch(addHotel(hotel));
  };

  const deleteExistingHotel = (hotel: IHotel) => {
    dispatch(deleteHotel(hotel));
  };

  const editExistingHotel = (hotel: IHotel) => {
    dispatch(editHotel(hotel));
  };

  return {
    hotelsList: categoryId ? groupedHotels : hotelsList,
    addNewHotel,
    deleteExistingHotel,
    editExistingHotel,
  };
};

export default useHotels;
