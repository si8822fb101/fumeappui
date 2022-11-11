export const getFileName = (path: string) => {
  const arr = path.split('\\');
  return arr[arr.length - 1];
};

export const getParentDirectory = (path: string) => {
  const arr = path.split('\\');
  arr.pop();
  return arr.join('\\');
};
