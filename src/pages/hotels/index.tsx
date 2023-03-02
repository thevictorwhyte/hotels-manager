import { useState } from 'react';

import {
  Box,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardHeader,
  IconButton,
  CardActionArea,
  Typography,
  CardContent,
  Menu,
} from '@mui/material';
import HotelEditor from './HotelEditor';

import useHotels from '../../hooks/hotels/useHotels';

import { SelectChangeEvent } from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmptyState from '../../components/EmptyState';
import { IHotel } from '../../redux/hotels/typings';

const Hotels = () => {
  const [category, setCategory] = useState('');
  const [modal, setModal] = useState<{
    data: IHotel | null;
    open: boolean;
  }>({
    data: null,
    open: false,
  });
  const { hotelsList, deleteExistingHotel } = useHotels();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Box p={4} sx={{ flexGrow: 1, maxWidth: 1000 }}>
      {!hotelsList.length ? (
        <EmptyState
          message="You have not created any hotel"
          buttonText="Create Hotel"
          onButtonClick={() => {
            setModal({ data: null, open: true });
          }}
        />
      ) : (
        <Stack direction="column" spacing={2} width="100%">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <FormControl sx={{ width: '200px' }}>
                <InputLabel id="demo-simple-select-label">
                  Filter by category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Categories"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1 Star</MenuItem>
                  <MenuItem value={20}>2 Star</MenuItem>
                  <MenuItem value={30}>3 Star</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid display="flex" justifyContent="right" item md={6}>
              <Box>
                <Button
                  variant="contained"
                  onClick={() =>
                    setModal({
                      data: null,
                      open: true,
                    })
                  }
                >
                  Add New Hotel
                </Button>
              </Box>
            </Grid>
            {hotelsList.map((hotel) => {
              return (
                <Hotel
                  key={hotel.id}
                  onMenuItemClick={() =>
                    setModal({
                      data: hotel,
                      open: true,
                    })
                  }
                  deleteExistingHotel={deleteExistingHotel}
                  hotel={hotel}
                />
              );
            })}
          </Grid>
        </Stack>
      )}

      <HotelEditor
        open={modal.open}
        data={modal.data}
        handleClose={() =>
          setModal({
            data: null,
            open: false,
          })
        }
      />
    </Box>
  );
};

interface IHotelProps {
  hotel: IHotel;
  onMenuItemClick: () => void;
  deleteExistingHotel: (x: IHotel) => void;
}

const Hotel = ({
  hotel,
  onMenuItemClick,
  deleteExistingHotel,
}: IHotelProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickVertIcon = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('this is hotel', hotel);
  return (
    <Grid md={6} item>
      <Card elevation={2}>
        <CardHeader
          action={
            <div>
              <IconButton aria-label="settings" onClick={handleClickVertIcon}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                open={open}
                key={hotel.id}
                id={`cateogries-menu-${hotel.id}`}
                onClose={handleClose}
                anchorEl={anchorEl}
              >
                <MenuItem
                  onClick={() => {
                    onMenuItemClick();
                    handleClose();
                  }}
                >
                  Edit Category
                </MenuItem>
                <MenuItem onClick={() => deleteExistingHotel(hotel)}>
                  Delete Category
                </MenuItem>
              </Menu>
            </div>
          }
          title={<Typography variant="h6">{hotel.name}</Typography>}
        />
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Category: {hotel.category?.name || 'No category available'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: {hotel.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Hotels;
