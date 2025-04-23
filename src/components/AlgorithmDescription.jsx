import { Card, CardContent, Divider, Typography, useTheme } from '@mui/material';

// Algorithm Description Information
const algorithmInfo = {
  bubbleSort: {
    title: 'Bubble Sort',
    description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: 'Simple to implement and efficient for small datasets',
    disadvantages: 'Inefficient for large datasets'
  },
  quickSort: {
    title: 'Quick Sort',
    description: 'Quick Sort uses the divide-and-conquer approach to partition the array into smaller sub-arrays, then recursively sorts them.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    advantages: 'Faster than most O(n log n) algorithms in practice with low memory usage',
    disadvantages: 'Can degrade to O(n²) in the worst case'
  },
  mergeSort: {
    title: 'Merge Sort',
    description: 'Merge Sort follows the divide-and-conquer paradigm. It divides the array into halves, recursively sorts them, and then merges the sorted halves.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    advantages: 'Stable sort with guaranteed performance',
    disadvantages: 'Requires additional memory'
  },
  insertionSort: {
    title: 'Insertion Sort',
    description: 'Insertion Sort builds the final sorted array one item at a time by comparing each new element with those already sorted.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: 'Efficient for small or nearly sorted datasets',
    disadvantages: 'Slow for large or randomly ordered datasets'
  },
  selectionSort: {
    title: 'Selection Sort',
    description: 'Selection Sort repeatedly selects the minimum element from the unsorted part and moves it to the sorted part of the array.',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: 'Easy to understand with fewer swaps',
    disadvantages: 'Always performs O(n²) comparisons regardless of input'
  },
  heapSort: {
    title: 'Heap Sort',
    description: 'Selection Sort repeatedly selects the minimum element from the unsorted part and moves it to the sorted part of the array.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(1)',
    advantages: 'Easy to understand with fewer swaps',
    disadvantages: 'Always performs O(n²) comparisons regardless of input'
  }
};


// Retrieve the theme color associated with the selected algorithm
const getAlgorithmColor = (theme, algorithm) => {
  switch(algorithm) {
    case 'bubbleSort': return theme.palette.algorithm.bubble;
    case 'quickSort': return theme.palette.algorithm.quick;
    case 'mergeSort': return theme.palette.algorithm.merge;
    case 'insertionSort': return theme.palette.algorithm.insertion;
    case 'selectionSort': return theme.palette.algorithm.selection;
    case 'heapSort': return theme.palette.algorithm.heap;
    default: return theme.palette.primary.main;
  }
};

function AlgorithmDescription({ algorithm }) {
  const theme = useTheme();
  const info = algorithmInfo[algorithm] || algorithmInfo.bubbleSort;
  const algorithmColor = getAlgorithmColor(theme, algorithm);
  
  return (
    <Card 
      elevation={3}
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        transition: 'all 0.3s ease',
        borderRadius: '1.5rem'
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: algorithmColor , fontWeight: 'bold' }}>
          {info.title}
        </Typography>
        
        <Divider sx={{ mb: 2 }} />
        
        <Typography variant="body2" sx={{ mb: 1 }}>
          {info.description}
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom>
          Time Complexity
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
          • Best-case time complexity: {info.timeComplexity.best}
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
          • Average time complexity: {info.timeComplexity.average}
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
          • Worst-case time complexity: {info.timeComplexity.worst}
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom>
          Space Complexity
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
          • {info.spaceComplexity}
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom>
          Pros
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2, mb: 2 }}>
          • {info.advantages}
        </Typography>
        
        <Typography variant="subtitle2" gutterBottom>
          Cons
        </Typography>
        
        <Typography variant="body2" sx={{ ml: 2 }}>
          • {info.disadvantages}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlgorithmDescription; 