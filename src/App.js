import './App.css';
import { Box, Button, createTheme, Stack, ThemeProvider } from '@mui/material';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Test from './component/Test';
import Add from './component/Add';
import { useState } from 'react';
import AppBarNab from './component/AppBarNab';

function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar></Navbar>
        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
