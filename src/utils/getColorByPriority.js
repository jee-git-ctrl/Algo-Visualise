import sortStatusConfig from './sortStatusConfig';

/**
 * @param index          The current index of the bar
 * @param currentState   An object representing current statuses: { comparing: [], swapping: [], sorted: [], pivot: [], ... }
 * @param algorithm      String: 'bubbleSort' | 'quickSort' | ...
 */

export const getColorByPriority = ({ index, currentState, algorithm }) => {
  const statusList = sortStatusConfig[algorithm] || [];

  for (let { key, color } of statusList) {
    if (currentState[key]?.includes(index)) {
      return color;
    }
  }
  // If no status matches, return default background color
  return '#ffffff';
};