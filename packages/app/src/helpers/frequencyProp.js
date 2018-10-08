import replace from './replace.js';
import byLargestProp from './byLargestProp.js';

export default (arr, equality = (a, b) => a === b) => arr
  .reduce((result, data) => {
    const nextWithCount = { data, count: 1 };
    const repeatedItemIndex = result.findIndex(item =>
      equality(item.data, data));
    const repeatedItem = result[repeatedItemIndex];

    if (repeatedItem) {
      const nextWithUpdatedCount = {
        ...nextWithCount,
        count: repeatedItem.count + 1
      };

      return replace(nextWithUpdatedCount, repeatedItemIndex, result);
    }

    return [...result, nextWithCount];
  }, [])
  .sort(byLargestProp('count'))
  .map(item => item.data);
