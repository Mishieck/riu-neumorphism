export const substringBetween = (str, start, end) => {
  return str.substring(str.indexOf(start[0]) + start[1], str.indexOf(end[0]) + end[1]);
};
