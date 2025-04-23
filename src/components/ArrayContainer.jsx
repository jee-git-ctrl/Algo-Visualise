import React, { useRef } from 'react';
import { Paper, useTheme } from '@mui/material';
import LegendManager from './LegendManager';
import ArrayBar from './ArrayBar';
import useSortStore from '../utils/sortStore';

function ArrayContainer() {
  const theme = useTheme();
  const containerRef = useRef(null);
  const { array } = useSortStore();
  
  // Calculate the max value for height ratio
  const maxValue = Math.max(...array, 1);
  
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mx: 0,
        height: 400,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 1,
        bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.400',
        borderRadius: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Color Legend */}
      <LegendManager />

      {array.map((value, index) => (
        <ArrayBar
          key={index}
          value={value}
          index={index}
          maxValue={maxValue}
          totalBars={array.length}
        />
      ))}
    </Paper>
  );
}

export default ArrayContainer;