import React from 'react';
import { 
  AppBar, 
  Box, 
  Button,
  MenuItem, 
  Select, 
  Toolbar, 
  Typography, 
  Switch, 
  FormControlLabel
} from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import useSortStore from '../utils/sortStore';

// Sort algorithm options
const algorithms = [
  { value: 'bubbleSort', label: 'Bubble Sort' },
  { value: 'quickSort', label: 'Quick Sort' },
  { value: 'mergeSort', label: 'Merge Sort' },
  { value: 'insertionSort', label: 'Insertion Sort' },
  { value: 'selectionSort', label: 'Selection Sort' },
  { value: 'heapSort', label: 'Heap Sort' }
];

// Array size options
const arraySizeOptions = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' }
];

function TopBar() {
  const handleDarkModeChange = () => {
    setDarkMode(prev => !prev);
  };

  const {
    algorithm, 
    setAlgorithm, 
    arraySize, 
    setArraySize, 
    generateArray, 
    isSorting,
    darkMode,
    setDarkMode
  } = useSortStore();

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 0, mr: 4 }}>
          Sorting Algorithm Visualizer
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography  variant="standard" size="small" sx={{ minWidth: 120 }}>
            <Select
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              displayEmpty
              disabled={isSorting}
              sx={{ 
                '& .MuiSelect-select': { py: 1 },
                borderRadius: '0.8rem',
              }}
            >
              {algorithms.map((algo) => (
                <MenuItem key={algo.value} value={algo.value}>
                  {algo.label}
                </MenuItem>
              ))}
            </Select>
          </Typography>
          
          <Typography  variant="standard" size="small" sx={{ minWidth: 80 }}>
            <Select
              value={arraySize}
              onChange={(e) => setArraySize(e.target.value)}
              disabled={isSorting}
              sx={{ 
                '& .MuiSelect-select': { py: 1 },
                borderRadius: '0.8rem',
              }}
              renderValue={(value) => (
                <Typography variant="body2">
                  Size {value}
                </Typography>
              )}
            >
              {arraySizeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Typography>
          
          <Button
            variant="outlined"
            startIcon={<ShuffleIcon />}
            onClick={generateArray}
            disabled={isSorting}
            sx={{ 
              textTransform: 'uppercase',
              borderRadius: '0.8rem',
              '&:focus': { outline: 'none' },
            }}
          >
            Randomize
          </Button>
        </Box>
        
        <FormControlLabel
          control={
            <Switch 
              checked={darkMode} 
              onChange={handleDarkModeChange} 
              color="primary" 
            />
          }
          label="Dark Mode"
          sx={{ ml: 2,}}
        />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;