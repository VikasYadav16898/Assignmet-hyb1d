export const dateFormatter = (date) => {
  const factoredDate = new Date(date);
  console.log(factoredDate.getDate());
  const newDate =
    factoredDate.getDate() +
    "/" +
    factoredDate.getMonth() +
    "/" +
    factoredDate.getFullYear();
  return newDate;
};
