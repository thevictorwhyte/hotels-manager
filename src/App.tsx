import React from 'react';
import { Box, Paper, Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes as appRoutes } from './routes';

import Sidebar from './components/Sidebar';

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
          <Router>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Router>
        </Stack>
      </Box>
    </Paper>
  );
}

export default App;
