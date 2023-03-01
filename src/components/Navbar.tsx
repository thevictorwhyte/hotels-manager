import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography>Hotels Manager</Typography>
        <Avatar onClick={() => setOpen(true)} />
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
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
