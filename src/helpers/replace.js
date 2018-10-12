export default (item, index, arr) => {
  if (index < 0 || index > arr.length - 1) {
    return arr;
  }

  return [
    ...arr.slice(0, index),
    item,
    ...arr.slice(index + 1)
  ];
};
