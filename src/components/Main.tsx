import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const Main = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box p={2} sx={{ flexGrow: 1 }}>
      <Box flex={1} justifyContent="space-between">
        <Grid container spacing={10}>
          <Grid item md={8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
          </Grid>

          <Grid item md={4}>
            <Button variant="contained">Add New Hotel</Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="caption">Nigeria</Typography>
                <Typography variant="body2" color="text.secondary">
                  No. 23 Boullizard Avenua opposite first avenue, Abuja
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="caption">Nigeria</Typography>
                <Typography variant="body2" color="text.secondary">
                  No. 23 Boullizard Avenua opposite first avenue, Abuja
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
