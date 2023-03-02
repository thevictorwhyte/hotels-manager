import { useSelector, useDispatch } from 'react-redux';
import { addHotel, deleteHotel, editHotel } from '../../redux/hotels/reducer';
import { selectHotelsList } from '../../redux/hotels/selectors';
import { IHotel } from '../../redux/hotels/typings';

const useHotels = () => {
  const dispatch = useDispatch();
  const hotelsList = useSelector(selectHotelsList);

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
    hotelsList,
    addNewHotel,
    deleteExistingHotel,
    editExistingHotel,
  };
};

export default useHotels;
