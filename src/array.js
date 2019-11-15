export const get = (arr, index, defaulValue = null) => {
  if (arr[index] === undefined) {
    return defaulValue;
  }

  return arr[index];
};

export const addPrefix = (arr, prefix) => arr.map(item => `${prefix} ${item}`);

export const swap = (coll, center) => {
  const lastIndex = coll.length - 1;
  const isSwappable = (center > 0) && (center < lastIndex);

  if (!isSwappable) {
    return coll;
  }

  const prevIndex = center - 1;
  const nextIndex = center + 1;

  const temp = coll[prevIndex];
  coll[prevIndex] = coll[nextIndex];
  coll[nextIndex] = temp;

  return coll;
};

export const isContinuousSequence = (coll) => {
  if (coll.length <= 1) {
    return false;
  }

  let index = 0;
  const start = coll[index];
  for (const item of coll) {
    if (start + index !== item) {
      return false;
    }
    index += 1;
  }

  return true;
};
