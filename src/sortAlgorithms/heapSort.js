export const heapSort = (array) => {
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = [];

  // Initial state
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    heapify: [],
    extracting: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  const n = array.length;

  // Sift down function: move node `i` down to the correct position within range [0..end]
  const siftDown = (arr, start, end) => {
    let root = start;

    // Highlight the current root being heapified
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      heapify: [root],
      extracting: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    while (true) {
      let child = 2 * root + 1;
      if (child > end) break;

      // Assume left child is larger initially
      let swapIdx = root;

      // Compare root vs. left child
      comparisons++;
      steps.push({
        array: [...array],
        comparing: [swapIdx, child],
        swapping: [],
        heapify: [root],
        extracting: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      if (arr[swapIdx] < arr[child]) swapIdx = child;

      // If right child exists, compare with it
      if (child + 1 <= end) {
        comparisons++;
        steps.push({
          array: [...array],
          comparing: [swapIdx, child + 1],
          swapping: [],
          heapify: [root],
          extracting: [],
          sorted: [...sorted],
          currentComparisons: comparisons,
          currentSwaps: swaps
        });
        if (arr[swapIdx] < arr[child + 1]) swapIdx = child + 1;
      }

      // If the root is already the largest, stop
      if (swapIdx === root) break;

      // Otherwise, swap and continue sifting down
      swaps++;
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [root, swapIdx],
        heapify: [root],
        extracting: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      [arr[root], arr[swapIdx]] = [arr[swapIdx], arr[root]];
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        heapify: [swapIdx],
        extracting: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      root = swapIdx;
    }
  };

  // 1) Build max heap
  for (let start = Math.floor(n / 2) - 1; start >= 0; start--) {
    siftDown(array, start, n - 1);
  }

  // 2) Extract elements one by one and move max to the end
  for (let end = n - 1; end > 0; end--) {
    // Indicate that we're extracting the max element
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      heapify: [],
      extracting: [end],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    swaps++;
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [0, end],
      heapify: [],
      extracting: [end],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });
    [array[0], array[end]] = [array[end], array[0]];
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      heapify: [],
      extracting: [end],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    // Mark the extracted position as sorted
    sorted.push(end);
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      heapify: [],
      extracting: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });

    // Re-heapify the remaining elements
    siftDown(array, 0, end - 1);
  }

  // Mark the final remaining element as sorted
  sorted.push(0);
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    heapify: [],
    extracting: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  return { steps, comparisons, swaps };
};