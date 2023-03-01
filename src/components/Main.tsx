import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Main = () => {
  const [age, setAge] = useState('');

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

          <Button variant="contained">Add New Hotel</Button>
        </Grid>

        <Grid container spacing={2}>
          <Grid>
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
    </Box>
  );
};

export default Main;
