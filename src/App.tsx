import React from 'react';
import { Box, Stack } from '@mui/material';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
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
  );
}

export default App;
