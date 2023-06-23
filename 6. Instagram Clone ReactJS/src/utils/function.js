export const checkLength = (text) => {
  if (text.length > 10) {
    return text.slice(0, 10) + '...';
  }
  return text;
};
