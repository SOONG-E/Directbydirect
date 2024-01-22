const splitCmd = (input) => {
  return input
    .trim()
    .split(' ')
    .filter((word) => word.length > 0);
};

export default splitCmd;
