import {
  Box,
  Stack,
  Grid,
  Button,
  Card,
  CardHeader,
  IconButton,
  CardActionArea,
  Typography,
  CardContent,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Categories = () => {
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
          <Grid item>
            <Button variant="contained">Add New Hotel</Button>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item style={{ padding: 0 }}>
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

export default Categories;
