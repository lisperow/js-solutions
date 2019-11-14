export const get = (arr, index, defaulValue = null) => {
  if (arr[index] === undefined) {
    return defaulValue;
  }

  return arr[index];
};

export const addPrefix = (arr, prefix) => arr.map(item => `${prefix} ${item}`);
