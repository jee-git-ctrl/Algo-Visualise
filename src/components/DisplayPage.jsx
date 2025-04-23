import React, { useEffect } from 'react';
import { 
  Box,
  ThemeProvider,
  useTheme
} from '@mui/material';
import useSortStore from '../utils/sortStore';
import TopBar from './TopBar';
import ControlButtonBar from './ControlButtonBar';
import ArrayContainer from './ArrayContainer';
import AlgorithmDescription from './AlgorithmDescription';

function DisplayPage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const { 
    generateArray, 
    algorithm,
  } = useSortStore();

  // Generate initial array
  useEffect(() => {
    generateArray();
  }, [generateArray]);
  
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}>
        <TopBar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <Box sx={{ flexGrow: 1, p: 2.5, overflow: 'hidden', }}>
          <ArrayContainer />
          
          <ControlButtonBar />
        
          <AlgorithmDescription algorithm={algorithm} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DisplayPage;