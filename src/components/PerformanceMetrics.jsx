import { Box, Typography, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';

/**
 * Component to display performance metrics of an algorithm, including 
 * the number of comparisons and swaps. Highlights values briefly when they change.
 */
function PerformanceMetrics({ comparisons, swaps }) {
  const theme = useTheme();

  // Previous values to detect changes
  const [prevComparisons, setPrevComparisons] = useState(comparisons);
  const [prevSwaps, setPrevSwaps] = useState(swaps);

  // State flags to trigger highlight animation
  const [isComparisonsHighlighted, setIsComparisonsHighlighted] = useState(false);
  const [isSwapsHighlighted, setIsSwapsHighlighted] = useState(false);

  // Highlight when comparisons count changes
  useEffect(() => {
    if (comparisons !== prevComparisons) {
      setIsComparisonsHighlighted(true);
      const timer = setTimeout(() => {
        setIsComparisonsHighlighted(false);
      }, 300);
      setPrevComparisons(comparisons);
      return () => clearTimeout(timer);
    }
  }, [comparisons, prevComparisons]);

  // Highlight when swaps count changes
  useEffect(() => {
    if (swaps !== prevSwaps) {
      setIsSwapsHighlighted(true);
      const timer = setTimeout(() => {
        setIsSwapsHighlighted(false);
      }, 300);
      setPrevSwaps(swaps);
      return () => clearTimeout(timer);
    }
  }, [swaps, prevSwaps]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: theme.palette.mode === 'dark' ? 'grey.750' : 'grey.100',
        px: 1,
        gap: 10,
      }}
    >
      {/* Comparisons section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="body2" color="text.secondary">Comparisons:</Typography>
        <Typography 
          variant="body2" 
          fontWeight="bold"
          sx={{ 
            transition: 'all 0.3s ease',
            bgcolor: isComparisonsHighlighted ? '#ffc0cb' : 'transparent',
            px: 0.5,
            borderRadius: '20.48%',
          }}
        >
          {comparisons}
        </Typography>
      </Box>
      
      {/* Swaps section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant="body2" color="text.secondary">Swaps:</Typography>
        <Typography 
          variant="body2" 
          fontWeight="bold"
          sx={{ 
            transition: 'all 0.3s ease',
            bgcolor: isSwapsHighlighted ? '#fbe376' : 'transparent',
            px: 0.5,
            borderRadius: '20.48%',
          }}
        >
          {swaps}
        </Typography>
      </Box>
    </Box>
  );
}

export default PerformanceMetrics;