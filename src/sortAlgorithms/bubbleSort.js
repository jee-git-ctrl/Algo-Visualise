export const bubbleSort = (array) => {
  const steps = [];
  const n = array.length;
  let comparisons = 0;
  let swaps = 0;
  const sorted = [];

  // Initial state
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      // Record comparison between two elements
      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      if (array[j] > array[j + 1]) {
        swaps++;
        // Record swap
        steps.push({
          array: [...array],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sorted],
          currentComparisons: comparisons,
          currentSwaps: swaps
        });

        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Record array after swapping
        steps.push({
          array: [...array],
          comparing: [],
          swapping: [],
          sorted: [...sorted],
          currentComparisons: comparisons,
          currentSwaps: swaps
        });
      }
    }

    // Mark the last sorted element after each outer loop
    sorted.unshift(n - i - 1);
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });
  }

  // Mark the first element as sorted
  sorted.unshift(0);
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  return { steps, comparisons, swaps };
};