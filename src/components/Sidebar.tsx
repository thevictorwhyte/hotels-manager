import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <Box
      width="20%"
      p={2}
      sx={{ display: { xs: 'none', lg: 'block' }, height: '100%' }}
    >
      <Paper elevation={0} sx={{ maxWidth: 256 }}>
        <List>
          {routes.map((route) => {
            return (
              <ListItem
                key={route.key}
                onClick={() => navigate(`${route.path}`)}
                disablePadding
              >
                <ListItemButton
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
