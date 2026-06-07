const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const dateTimeFormat = (dateString: string) => localDate.format(new Date(dateString));