export const dateFormatter = (date) => {
  const factoredDate = new Date(date);
  const newDate =
    factoredDate.getDate() +
    "/" +
    factoredDate.getMonth() +
    "/" +
    factoredDate.getFullYear();
  return newDate;
};
