import React from 'react';
import { Box, Paper, Stack } from '@mui/material';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <Paper sx={{ borderRadius: '0px' }}>
      <Box height="100vh">
        {/* <Navbar /> */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          height="100vh"
        >
          <Sidebar />
          <Main />
        </Stack>
      </Box>
    </Paper>
  );
}

export default App;
