export const isEmptyObj = (obj: Object): boolean => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
