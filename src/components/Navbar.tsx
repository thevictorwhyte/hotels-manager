import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../routes';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ display: { xs: 'block', lg: 'none' } }}>
      <StyledToolbar>
        <Typography>Hotels Manager</Typography>
        <MenuIcon onClick={() => setOpen(true)} />
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        open={open}
        aria-labelledby="demo-positioned-button"
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {routes.map((route) => {
          return (
            <MenuItem
              key={route.key}
              onClick={() => navigate(`${route.path}`)}
              selected={location.pathname === route.path}
            >
              {route.title}
            </MenuItem>
          );
        })}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
