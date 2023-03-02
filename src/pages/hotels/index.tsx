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

import { SelectChangeEvent } from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Hotels = () => {
  const [age, setAge] = useState('');
  const [modal, setModal] = useState({
    data: null,
    open: false,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box p={4} sx={{ flexGrow: 1, maxWidth: 1000 }}>
      <Stack direction="column" spacing={2} width="100%">
        <Grid
          container
          spacing={2}
          alignItems="start"
          display="flex"
          justifyContent="space-between"
        >
          <FormControl sx={{ width: '200px' }}>
            <InputLabel id="demo-simple-select-label">
              Filter by category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Categories"
              onChange={handleChange}
            >
              <MenuItem value={10}>1 Star</MenuItem>
              <MenuItem value={20}>2 Star</MenuItem>
              <MenuItem value={30}>3 Star</MenuItem>
            </Select>
          </FormControl>

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
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            <Card elevation={2}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={<Typography variant="h6">Peak Hotels</Typography>}
                subheader={<Typography variant="caption">Nigeria</Typography>}
              />
              <CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    No. 23 Boullizard Avenua opposite first avenue, Abuja
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Stack>

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
