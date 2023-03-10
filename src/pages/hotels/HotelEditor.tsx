import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Autocomplete,
} from '@mui/material';
import useHotels from '../../hooks/hotels/useHotels';
import { IHotel } from '../../redux/hotels/typings';
import useCategories from '../../hooks/categories/useCategories';
import { ICategory } from '../../redux/categories/typings';

interface IProps {
  open: boolean;
  handleClose: () => void;
  data: IHotel | null;
  countries: string[];
}

const HotelEditor = ({ open, handleClose, data, countries }: IProps) => {
  const [hotelName, setHotelName] = useState('');
  const [hotelAddress, setHotelAddress] = useState('');
  const [hotelCategory, setHotelCategory] = useState<
    ICategory | null | undefined
  >(null);
  const [hotelCountry, setHotelCountry] = useState('');
  const { addNewHotel, editExistingHotel } = useHotels({});
  const { categories, getCategory } = useCategories();

  const handleHotelNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHotelName(event.target.value);
  };

  const handleHotelAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHotelAddress(event.target.value);
  };

  const handleSave = () => {
    if (data) {
      editExistingHotel({
        ...data,
        name: hotelName,
        address: hotelAddress,
        category: hotelCategory?.id,
        country: hotelCountry,
      });
    } else {
      addNewHotel({
        name: hotelName,
        address: hotelAddress,
        id: uuidv4(),
        category: hotelCategory?.id,
        country: hotelCountry,
      });
    }
    handleClose();
    reset();
  };
  const reset = () => {
    setHotelName('');
    setHotelAddress('');
    setHotelCategory(null);
    setHotelCountry('');
  };
  const closeModal = () => {
    reset();
    handleClose();
  };

  useEffect(() => {
    if (data) {
      setHotelName(data.name);
      setHotelAddress(data.address);
      setHotelCategory(getCategory(data?.category || ''));
      setHotelCountry(data.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <TextField
          id="hotel-name"
          label="Hotel Name"
          sx={{ width: '100%' }}
          value={hotelName}
          onChange={handleHotelNameChange}
        />
        <br />
        <TextField
          id="hotel-address"
          label="Hotel Address"
          sx={{ width: '100%' }}
          value={hotelAddress}
          onChange={handleHotelAddressChange}
        />
        <br />
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="hotel-category-label">Hotel Category</InputLabel>
          <Select
            labelId="hotel-category-label"
            id="hotel-category"
            value={hotelCategory?.id || ''}
            sx={{ width: '100%' }}
          >
            {categories.map((category) => {
              return (
                <MenuItem
                  key={category.id}
                  value={category.id}
                  onClick={() => {
                    setHotelCategory(category);
                  }}
                >
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <Autocomplete
          onChange={(event, newValue) => {
            setHotelCountry(newValue as string);
          }}
          disablePortal
          id="hotel-country"
          options={countries}
          value={hotelCountry}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
        <br />
        <Box
          display="flex"
          justifyContent="end"
          gap={2}
          alignItems="end"
          width="100%"
        >
          <Button variant="outlined" color="primary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            disabled={
              !hotelName || !hotelAddress || !hotelCategory || !hotelCountry
            }
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '60%', lg: '30%' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default HotelEditor;
