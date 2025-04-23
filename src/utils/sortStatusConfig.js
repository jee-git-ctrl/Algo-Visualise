/**
 * Status keys, colors, and legend labels for each sorting algorithm.
 * The order of the array represents the priority (earlier items have higher priority).
 */
const sortStatusConfig = {
  // Bubble Sort: comparing > swapping > sorted
  bubbleSort: [
    { key: 'comparing', color: '#ffc0cb', label: 'Comparing' },
    { key: 'swapping',  color: '#fbe376', label: 'Swapping' },
    { key: 'sorted',    color: '#00e472', label: 'Sorted' }
  ],

  // Quick Sort: comparing > swapping > pivot > sorted
  quickSort: [
    { key: 'comparing', color: '#ffc0cb', label: 'Comparing' },
    { key: 'swapping',  color: '#fbe376', label: 'Swapping' },
    { key: 'pivot',     color: '#00bfff', label: 'Pivot'     },
    { key: 'sorted',    color: '#00e472', label: 'Sorted'    }
  ],

  // Merge Sort: comparing > merging > sorted
  mergeSort: [
    { key: 'comparing', color: '#ffc0cb', label: 'Comparing' },
    { key: 'merging',   color: '#fbe376', label: 'Merging'   },
    { key: 'sorted',    color: '#00e472', label: 'Sorted'    }
  ],

  // Insertion Sort: comparing > shifting > sorted
  insertionSort: [
    { key: 'comparing', color: '#ffc0cb', label: 'Comparing' },
    { key: 'shifting',  color: '#fbe376', label: 'Shifting'  },
    { key: 'sorted',    color: '#00e472', label: 'Sorted'    }
  ],

  // Selection Sort: comparing > minIndex > sorted
  selectionSort: [
    { key: 'comparing', color: '#ffc0cb', label: 'Comparing' },
    { key: 'minIndex', color: '#fbe376', label: 'Min Index' },
    { key: 'sorted',   color: '#00e472', label: 'Sorted'     }
  ],

  // Heap Sort: comparing > swapping > heapify > extracting > sorted
  heapSort: [
    { key: 'comparing',  color: '#ffc0cb', label: 'Comparing' },
    { key: 'swapping',   color: '#fbe376', label: 'Swapping' },
    { key: 'heapify',    color: '#ffdead', label: 'Heapify'   },
    { key: 'extracting', color: '#ffa500', label: 'Extract Max' },
    { key: 'sorted',     color: '#00e472', label: 'Sorted'    }
  ]
};

export default sortStatusConfig;