import { create } from 'zustand';
import { bubbleSort } from '../sortAlgorithms/bubbleSort';
import { insertionSort } from '../sortAlgorithms/insertionSort';
import { mergeSort } from '../sortAlgorithms/mergeSort';
import { quickSort } from '../sortAlgorithms/quickSort';
import { selectionSort } from '../sortAlgorithms/selectionSort';
import { heapSort } from '../sortAlgorithms/heapSort';
import { generateRandomArray } from './generateRandomArray';

const useSortStore = create((set, get) => ({
  // Dark mode toggle
  setDarkMode: (valueOrUpdater) => {
    set((state) => ({
      darkMode: typeof valueOrUpdater === 'function'
        ? valueOrUpdater(state.darkMode)
        : valueOrUpdater
    }));
  },

  // Array configuration
  array: [],
  arraySize: 10,
  minValue: 1,
  maxValue: 50,

  // Sorting-related configuration
  algorithm: 'bubbleSort',
  sortingSteps: [],
  currentStepIndex: -1,
  isSorting: false,
  animationSpeed: 1000, // ms
  animationTimerId: null,

  // Performance metrics
  comparisons: 0,
  swaps: 0,

  // Visualization highlights
  comparing: [],
  swapping: [],
  sorted: [],
  merging: [],
  shifting: [],
  pivot: [],
  minIndex: [],
  heapify: [],
  extracting:[],

  // Generate a new random array and reset all relevant states
  generateArray: () => {
    const { arraySize, minValue, maxValue } = get();
    const newArray = generateRandomArray(arraySize, minValue, maxValue);
    set({
      array: newArray,
      sortingSteps: [],
      currentStepIndex: -1,
      comparisons: 0,
      swaps: 0,
      comparing: [],
      swapping: [],
      sorted: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: []
    });
  },

  // Update array size and regenerate the array
  setArraySize: (size) => {
    set({ arraySize: size });
    get().generateArray();
  },

  // Select the sorting algorithm
  setAlgorithm: (algorithm) => {
    set({ algorithm });
  },

  // Update animation speed (in milliseconds)
  setAnimationSpeed: (speed) => {
    set({ animationSpeed: speed });
  },

  // Prepare sorting steps before animation starts
  prepareSorting: () => {
    const { array, algorithm } = get();
    let steps = [];

    // Determine which sorting algorithm to use
    switch (algorithm) {
      case 'bubbleSort':
        ({ steps } = bubbleSort([...array]));
        break;
      case 'quickSort':
        ({ steps } = quickSort([...array]));
        break;
      case 'mergeSort':
        ({ steps } = mergeSort([...array]));
        break;
      case 'insertionSort':
        ({ steps } = insertionSort([...array]));
        break;
      case 'selectionSort':
        ({ steps } = selectionSort([...array]));
        break;
      case 'heapSort':
        ({ steps } = heapSort([...array]));
        break;
      default:
        ({ steps } = bubbleSort([...array]));
    }

    // Reset state before starting the animation
    set({
      sortingSteps: steps,
      currentStepIndex: -1,
      comparisons: 0,
      swaps: 0,
      comparing: [],
      swapping: [],
      sorted: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: []
    });
  },

  // Start sorting animation using intervals
  startSorting: () => {
    const store = get();
    if (store.isSorting) return;

    // If steps are not prepared, initialize them
    if (store.sortingSteps.length === 0) {
      store.prepareSorting();
    }

    set({ isSorting: true });

    // Clear any previous animation
    if (store.animationTimerId) {
      clearInterval(store.animationTimerId);
    }

    // Begin animation loop
    const timerId = setInterval(() => {
      const { currentStepIndex, sortingSteps } = get();

      if (currentStepIndex >= sortingSteps.length - 1) {
        // End animation when steps are complete
        clearInterval(timerId);
        set({ isSorting: false, animationTimerId: null });
        return;
      }

      // Proceed to the next step
      get().nextStep();
    }, store.animationSpeed);

    set({ animationTimerId: timerId });
  },

  // Pause sorting animation
  pauseSorting: () => {
    const { animationTimerId } = get();
    if (animationTimerId) {
      clearInterval(animationTimerId);
      set({ isSorting: false, animationTimerId: null });
    }
  },

  // Reset all sorting-related states
  resetSorting: () => {
    const { animationTimerId } = get();
    if (animationTimerId) {
      clearInterval(animationTimerId);
    }

    set({
      currentStepIndex: -1,
      isSorting: false,
      animationTimerId: null,
      comparisons: 0,
      swaps: 0,
      comparing: [],
      swapping: [],
      sorted: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: []
    });
  },

  // Go to the next animation step
  nextStep: () => {
    const { currentStepIndex, sortingSteps } = get();
    if (currentStepIndex >= sortingSteps.length - 1) return;

    const nextIndex = currentStepIndex + 1;
    const step = sortingSteps[nextIndex];

    set({
      currentStepIndex: nextIndex,
      array: step.array,
      comparing: step.comparing || [],
      swapping: step.swapping || [],
      sorted: step.sorted || [],
      merging: step.merging || [],
      shifting: step.shifting || [],
      pivot: step.pivot || [],
      minIndex: step.minIndex || [],
      heapify: step.heapify || [],
      extracting: step.extracting || [], 
      comparisons: step.currentComparisons || 0,
      swaps: step.currentSwaps || 0
    });
  },

  // Go back one animation step
  previousStep: () => {
    const { currentStepIndex, sortingSteps } = get();
    if (currentStepIndex <= 0) return;

    const prevIndex = currentStepIndex - 1;
    const step = sortingSteps[prevIndex];

    set({
      currentStepIndex: prevIndex,
      array: step.array,
      comparing: step.comparing || [],
      swapping: step.swapping || [],
      sorted: step.sorted || [],
      merging: step.merging || [],
      shifting: step.shifting || [],
      pivot: step.pivot || [],
      minIndex: step.minIndex || [],
      heapify: step.heapify || [],
      extracting: step.extracting || [], 
      comparisons: step.currentComparisons || 0,
      swaps: step.currentSwaps || 0
    });
  },

  // Return the time complexity of the current algorithm
  getTimeComplexity: () => {
    const { algorithm } = get();
    const complexities = {
      bubbleSort: 'O(n²)',
      quickSort: 'O(n log n)',
      mergeSort: 'O(n log n)',
      insertionSort: 'O(n²)',
      selectionSort: 'O(n²)',
      heapSort: 'O(n log n)'
    };
    return complexities[algorithm] || '';
  }
}));

export default useSortStore;