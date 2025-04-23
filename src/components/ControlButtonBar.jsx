import React from 'react';
import { 
  Box, 
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'; 
import PerformanceMetrics from './PerformanceMetrics';
import useSortStore from '../utils/sortStore';

// Convert animation speed to display format
const speedOptions = [
  { value: 2000, label: '0.5x' },
  { value: 1000, label: '1x' },
  { value: 500, label: '2x' },
  { value: 250, label: '4x' },
  { value: 125, label: '8x' }, 
  { value: 100, label: '10x' }
];

function ControlButtonBar() {
  const {
    animationSpeed,
    setAnimationSpeed,
    isSorting,
    startSorting,
    pauseSorting,
    resetSorting,
    nextStep,
    previousStep,
    currentStepIndex,
    comparisons,
    swaps
  } = useSortStore();

  return (
    <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        my: 5,
        px: 2,
        position: 'relative'
      }}
    >
      
      {/* Left part：Performance Metrics */}
      <Box sx={{ flex: 1 }}>
        <PerformanceMetrics
          comparisons={comparisons}
          swaps={swaps}
        />
      </Box>

      {/* Middle part：Buttons */}
      <Box 
        sx={{ 
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          alignItems: 'center', 
          gap: 2.5,
        }}
      >
        <IconButton 
          color="primary" 
          onClick={resetSorting}
          size="medium"
          sx={{ 
            '&:focus': { outline: 'none' },
            '&:hover': { backgroundColor: (theme) => theme.palette.action.selected },
          }}
        >
          <RepeatIcon sx={{ fontSize: 20 }} />
        </IconButton>
        
        <IconButton 
          color="primary" 
          onClick={previousStep}
          disabled={isSorting || currentStepIndex <= 0}
          size="medium"
          sx={{ 
            '&:focus': { outline: 'none' },
            '&:hover': { backgroundColor: (theme) => theme.palette.action.selected },
          }}
        >
          <SkipPreviousIcon sx={{ fontSize: 32 }} />
        </IconButton>
        
        <IconButton 
          sx={{ 
            width: 63, 
            height: 63, 
            bgcolor: isSorting ? 'warning.main' : 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: isSorting ? 'warning.dark' : 'primary.dark',
            },
            '&:focus': { outline: 'none' },
          }} 
          onClick={isSorting ? pauseSorting : startSorting}
          size="large"
        >
          {isSorting ? <PauseIcon sx={{ fontSize: 30 }} /> : <PlayArrowIcon sx={{ fontSize: 30 }} />}
        </IconButton>
        
        <IconButton 
          color="primary" 
          onClick={nextStep}
          disabled={isSorting}
          size="medium"
          sx={{ 
            '&:focus': { outline: 'none' },
            '&:hover': { backgroundColor: (theme) => theme.palette.action.selected },
          }}
        >
          <SkipNextIcon sx={{ fontSize: 32 }} />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Select
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            size="small"
            disabled={isSorting}
            sx={{ 
              minWidth: 60,
              '& .MuiSelect-icon': { display: 'none', },
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          >
            {speedOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      {/* Right part：Empty placeholder box to maintain symmetrical layout */}
      <Box sx={{ flex: 1 }} />
    </Box>
  );
}

export default ControlButtonBar;