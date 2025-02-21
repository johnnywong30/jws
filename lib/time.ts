const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const epochToDate = (epoch: number) => {
  const date = new Date(epoch);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dateObject = {
    day,
    numericalMonth: month + 1,
    fullMonth: months[month],
    shortMonth:
      months[month].length > 3
        ? `${months[month].slice(0, 3)}.`
        : months[month],
    year,
  };
  return dateObject;
};

export const getCurrentEpoch = () => Date.now();
