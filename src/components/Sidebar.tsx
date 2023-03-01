import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
  return (
    <Box
      width="20%"
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' }, height: '100%' }}
    >
      <Paper elevation={0} sx={{ maxWidth: 256 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary="Hotels" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
