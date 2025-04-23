import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import useSortStore from '../utils/sortStore';
import { getColorByPriority } from '../utils/getColorByPriority';

// Define keyframe animations for each state
const comparePulse = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const swapShake = keyframes`
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-5px); }
  75%      { transform: translateX(5px); }
`;

const mergePulse = keyframes`
  0%   { background-color: rgba(251, 231, 118, 0.5); }
  50%  { background-color: rgba(251, 231, 118, 1); }
  100% { background-color: rgba(251, 231, 118, 0.5); }
`;

const shiftSlide = keyframes`
  0%   { transform: translateX(0); }
  50%  { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const pivotBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`;

const minIndexHighlight = keyframes`
  0%   { box-shadow: none; }
  50%  { box-shadow: 0 0 8px rgba(251, 231, 118, 0.8); }
  100% { box-shadow: none; }
`;

const sortedFade = keyframes`
  0%   { opacity: 0.3; }
  100% { opacity: 1; }
`;

const heapifyZoom = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const extractingGlow = keyframes`
  0%   { box-shadow: 0 0 0 rgba(255, 105, 180, 0); }
  50%  { box-shadow: 0 0 12px rgba(255, 105, 180, 0.7); }
  100% { box-shadow: 0 0 0 rgba(255, 105, 180, 0); }
`;

function ArrayBar({ value, index, maxValue, totalBars }) {
  const {
    comparing,
    swapping,
    sorted,
    pivot,
    merging,
    shifting,
    minIndex,
    heapify, 
    extracting, 
    algorithm
  } = useSortStore();

  // Construct the currentState object
  const currentState = { comparing, swapping, sorted, pivot, merging, shifting, minIndex, heapify, extracting };

  // Get the color based on state priority
  const color = getColorByPriority({ index, currentState, algorithm });

  // Determine the animation based on state priority
  // The order must match the one in sortStatusConfig.js
  const getAnimation = () => {
    const order = ['comparing', 'swapping', 'merging', 'shifting', 'pivot', 'minIndex', 'heapify', 'extracting', 'sorted'];
    for (let state of order) {
      if (currentState[state]?.includes(index)) {
        switch (state) {
          case 'comparing': return `${comparePulse} 0.4s ease-in-out`;
          case 'swapping':  return `${swapShake} 0.4s ease-in-out`;
          case 'merging':   return `${mergePulse} 0.6s ease-in-out`;
          case 'shifting':  return `${shiftSlide} 0.4s ease-in-out`;
          case 'pivot':     return `${pivotBlink} 0.6s step-start`;
          case 'minIndex':  return `${minIndexHighlight} 0.6s ease-in-out`;
          case 'heapify':    return `${heapifyZoom} 0.5s ease-in-out`;
          case 'extracting': return `${extractingGlow} 0.5s ease-in-out`;
          case 'sorted':    return `${sortedFade} 0.6s ease-in`;
        }
      }
    }
    return 'none';
  };

  return (
    <Tooltip title={`Value: ${value}`} arrow placement="top">
      <Box
        sx={{
          // Size and Colour
          height: `${(value / maxValue) * 80}%`,
          width: `calc((100% / ${totalBars}) - 4px)`,
          bgcolor: color,
          // Layout
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          borderRadius: '0.8rem',
          border: '1px solid rgba(0,0,0,0.2)',
          cursor: 'pointer',
          // Transitions and animations
          transition: 'height 0.3s ease, background-color 0.3s ease',
          animation: getAnimation(),
          '&:hover': { opacity: 0.8 }
        }}
      >
        {totalBars <= 20 && (
          <Typography
            variant="caption"
            sx={{
              color: 'black',
              mb: 0.5,
              fontWeight: 'bold',
              fontSize: { xs: '0.6rem', sm: '0.75rem' }
            }}
          >
            {value}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
}

export default ArrayBar;
