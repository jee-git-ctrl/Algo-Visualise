export const selectionSort = (array) => {
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = [];

  // Initial state
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    merging: [],
    shifting: [],
    pivot: [],
    minIndex: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;

    // At the start of each outer loop, highlight the current minIdx
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: [minIdx],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    for (let j = i + 1; j < array.length; j++) {
      comparisons++;
      // Comparing phase
      steps.push({
        array: [...array],
        comparing: [minIdx, j],
        swapping: [],
        merging: [],
        shifting: [],
        pivot: [],
        minIndex: [minIdx],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      if (array[j] < array[minIdx]) {
        minIdx = j;
        // Update highlight for new minIndex
        steps.push({
          array: [...array],
          comparing: [],
          swapping: [],
          merging: [],
          shifting: [],
          pivot: [],
          minIndex: [minIdx],
          sorted: [...sorted],
          currentComparisons: comparisons,
          currentSwaps: swaps
        });
      }
    }

    if (minIdx !== i) {
      swaps++;
      // Swapping phase
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [i, minIdx],
        merging: [],
        shifting: [],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }

    // Mark i as sorted
    sorted.push(i);
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });
  }

  // Mark the last element as sorted
  sorted.push(array.length - 1);
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    merging: [],
    shifting: [],
    pivot: [],
    minIndex: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  return { steps, comparisons, swaps };
};