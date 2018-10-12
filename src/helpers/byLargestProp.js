export default prop => (a, b) =>
  (a[prop] === b[prop]) ? 0 : (a[prop] < b[prop]) ? 1 : -1;
