import { useSelector, useDispatch } from 'react-redux';
import { addHotel } from '../../redux/hotels/reducer';
import { selectHotelsList } from '../../redux/hotels/selectors';
import { IHotel } from '../../redux/hotels/typings';

const useHotels = () => {
  const dispatch = useDispatch();
  const hotelsList = useSelector(selectHotelsList);

  const addNewHotel = (hotel: IHotel) => {
    dispatch(addHotel(hotel));
  };

  return {
    hotelsList,
    addNewHotel,
  };
};

export default useHotels;
