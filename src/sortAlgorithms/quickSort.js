export const quickSort = (array) => {
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = [];

  // Initial state: no pivot
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    sorted: [...sorted],
    pivot: [],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  const quickSortHelper = (arr, left, right) => {
    if (left >= right) {
      if (left === right) {
        // A single element is also considered sorted
        sorted.push(left);
        steps.push({
          array: [...array],
          comparing: [],
          swapping: [],
          sorted: [...sorted],
          pivot: [],
          currentComparisons: comparisons,
          currentSwaps: swaps
        });
      }
      return;
    }

    const pivotIndex = partition(arr, left, right);

    // Mark the pivot as sorted
    sorted.push(pivotIndex);
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      sorted: [...sorted],
      pivot: [],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    quickSortHelper(arr, left, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, right);
  };

  const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;

    // 📍 Highlight the current pivot
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      sorted: [...sorted],
      pivot: [right],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    for (let j = left; j < right; j++) {
      comparisons++;
      // Compare arr[j] with pivot
      steps.push({
        array: [...array],
        comparing: [j, right],
        swapping: [],
        sorted: [...sorted],
        pivot: [right],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          swaps++;
          // Highlight before swapping
          steps.push({
            array: [...array],
            comparing: [],
            swapping: [i, j],
            sorted: [...sorted],
            pivot: [right],
            currentComparisons: comparisons,
            currentSwaps: swaps
          });
          [arr[i], arr[j]] = [arr[j], arr[i]];
          // Update array after swapping
          steps.push({
            array: [...array],
            comparing: [],
            swapping: [],
            sorted: [...sorted],
            pivot: [right],
            currentComparisons: comparisons,
            currentSwaps: swaps
          });
        }
      }
    }

    // Move pivot to the correct position
    if (i + 1 !== right) {
      swaps++;
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [i + 1, right],
        sorted: [...sorted],
        pivot: [right],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      // After swap, mark pivot at the new position
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        sorted: [...sorted],
        pivot: [i + 1],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
    }

    return i + 1;
  };

  quickSortHelper(array, 0, array.length - 1);

  return { steps, comparisons, swaps };
};