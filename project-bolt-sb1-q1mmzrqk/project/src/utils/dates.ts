export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getAvailableDates = (bookedDates: string[]): Date[] => {
  const dates: Date[] = [];
  const today = new Date();
  const threeMonthsFromNow = new Date();
  threeMonthsFromNow.setMonth(today.getMonth() + 3);

  for (let d = new Date(today); d <= threeMonthsFromNow; d.setDate(d.getDate() + 1)) {
    if (!bookedDates.includes(d.toISOString().split('T')[0])) {
      dates.push(new Date(d));
    }
  }

  return dates;
};