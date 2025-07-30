export const getOneHourAfterNow = (): Date => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 1);
  return currentDate;
};

export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toISOString();
};
