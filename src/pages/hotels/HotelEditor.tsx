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
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import useHotels from '../../hooks/hotels/useHotels';
import { IHotel } from '../../redux/hotels/typings';

interface IProps {
  open: boolean;
  handleClose: () => void;
  data: IHotel | null;
}

const HotelEditor = ({ open, handleClose, data }: IProps) => {
  const [hotelName, setHotelName] = useState('');
  const [hotelAddress, setHotelAddress] = useState('');
  const [hotelCategory, setHotelCategory] = useState('');
  const { addNewHotel, editExistingHotel } = useHotels();

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

  const handleHotelCategoryChange = (event: SelectChangeEvent<string>) => {
    setHotelCategory(event.target.value as string);
  };

  const handleSave = () => {
    if (data) {
      editExistingHotel({
        ...data,
        name: hotelName,
        address: hotelAddress,
      });
    } else {
      addNewHotel({
        name: hotelName,
        address: hotelAddress,
        id: uuidv4(),
      });
    }
    handleClose();
    setHotelName('');
    setHotelAddress('');
    setHotelCategory('');
  };

  useEffect(() => {
    if (data) {
      setHotelName(data.name);
      setHotelAddress(data.address);
    }
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
            value={hotelCategory}
            sx={{ width: '100%' }}
            onChange={handleHotelCategoryChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Luxury">Luxury</MenuItem>
            <MenuItem value="Mid-Range">Mid-Range</MenuItem>
            <MenuItem value="Budget">Budget</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Box
          display="flex"
          justifyContent="end"
          gap={2}
          alignItems="end"
          width="100%"
        >
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
