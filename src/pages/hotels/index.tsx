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
} from '@mui/material';
import HotelEditor from './HotelEditor';

import useHotels from '../../hooks/hotels/useHotels';

import { SelectChangeEvent } from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmptyState from '../../components/EmptyState';

const Hotels = () => {
  const [category, setCategory] = useState('');
  const [modal, setModal] = useState({
    data: null,
    open: false,
  });
  const { hotelsList } = useHotels();

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
            <Grid
              item
              md={6}
              // style={{ padding: 0, width: '100%' }}
            >
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
                <Grid
                  key={hotel.id}
                  item
                  md={6}
                  // style={{ padding: 0, width: '100%' }}
                >
                  <Card elevation={2}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={<Typography variant="h6">{hotel.name}</Typography>}
                      subheader={
                        <Typography variant="caption">Nigeria</Typography>
                      }
                    />
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Address: {hotel.address}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      )}

      <HotelEditor
        open={modal.open}
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

export default Hotels;
