# Sorting Algorithm Visualizer

A web-based interactive sorting algorithm visualizer built with React, MUI and Zustand.  
Visualize and compare the inner workings of Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, Selection Sort and Heap Sort with animated bars, dynamic legends and live performance metrics.

---

## 🚀 Features

- **Six Sorting Algorithms**

  - Bubble Sort
  - Quick Sort (with pivot highlighting)
  - Merge Sort (with “merge” animation)
  - Insertion Sort (with “shifting” animation)
  - Selection Sort (with “min index” highlight)
  - Heap Sort (with “heapify” & “extract max” animations)

- **Step‑by‑Step Visualization**  
  Animate each comparison, swap, and algorithm‑specific action.

- **Dynamic Legend**  
  Shows current algorithm’s active states and colors, driven by a shared configuration.

- **Performance Metrics**  
  Live comparison and swap counts.

- **Controls & Configuration**

  - Generate a new random array
  - Choose array size, min/max values
  - Select algorithm
  - Play / Pause / Step forward / Step backward
  - Adjust animation speed
  - Dark / Light mode

- **Modular & Extensible**
  - Add new algorithms by dropping in a new `sortAlgorithms/*.js` and updating `sortStatusConfig.js`
  - Colors, priorities and legend labels all driven by a single config file
