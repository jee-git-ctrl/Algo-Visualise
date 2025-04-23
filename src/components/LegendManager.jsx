import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import useSortStore from '../utils/sortStore';
import sortStatusConfig from '../utils/sortStatusConfig';

function LegendManager() {
  const theme = useTheme();
  const { algorithm } = useSortStore();
  const legends = sortStatusConfig[algorithm] || [];

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
        p: 0.5,
        bgcolor: theme.palette.mode === 'dark' ? 'grey.750' : 'grey.400',
        alignItems: 'center',
        borderRadius: 1
      }}
    >
      {legends.map(({ color, label }, i) => (
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }} key={i}>
          <Box 
            sx={{ 
              width: 12, 
              height: 12, 
              bgcolor: color, 
              mr: 0.5,
              borderRadius: '20%',
              border: '1px solid rgba(0,0,0,0.2)'
            }} 
          />
          <Typography variant="caption">{label}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default LegendManager;
