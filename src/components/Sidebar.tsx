import { useLocation } from 'react-router-dom';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  // Link,
} from '@mui/material';

import { routes } from '../routes';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      width="20%"
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' }, height: '100%' }}
    >
      <Paper elevation={0} sx={{ maxWidth: 256 }}>
        <List>
          {routes.map((route) => {
            return (
              <ListItem key={route.key} disablePadding>
                <ListItemButton
                  href={route.path}
                  component="a"
                  selected={location.pathname === route.path}
                >
                  <ListItemText primary={route.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
