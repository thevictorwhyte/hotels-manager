import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const Main = () => {
  return (
    <Box p={2} sx={{ flexGrow: 1 }}>
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
