export const compareValues = (key, toggle) => {
  return function innerSort(a, b) {
    const A = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const B = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return !toggle ? comparison * -1 : comparison;
  };
};
