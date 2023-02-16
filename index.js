const processArray = (array) => {
  if (!array.length) {
    return [];
  }
  let uniqueArray = Array.from(new Set(array));
  uniqueArray = uniqueArray.map((el) => (el >= 0 ? el : "*"));
  return uniqueArray;
};

module.exports = processArray;
