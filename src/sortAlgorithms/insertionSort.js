export const insertionSort = (array) => {
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = [0];

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

  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;

    // First comparison
    comparisons++;
    steps.push({
      array: [...array],
      comparing: [i, j],
      swapping: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    // Shifting operation
    while (j >= 0 && array[j] > key) {
      if (j > 0) {
        comparisons++;
        steps.push({
          array: [...array],
          comparing: [j, j - 1],
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

      array[j + 1] = array[j];
      swaps++;
      // Use `shifting` to indicate a right shift operation
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        merging: [],
        shifting: [j, j + 1],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      j--;
    }

    // Insert the key into the correct position
    array[j + 1] = key;
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

  return { steps, comparisons, swaps };
};