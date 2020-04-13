function getDateInfo() {
  // Date Calculation
  const todayDate = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayCount = {
    January: 31,
    February: todayDate.getFullYear() % 4 === 0 ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMonth = months[todayDate.getMonth()];
  const currentYear = todayDate.getFullYear();
  const currentDate = todayDate.getDate();
  const currentDay = days[todayDate.getDay()];
  return {
    todayDate,
    months,
    dayCount,
    days,
    currentMonth,
    currentYear,
    currentDate,
    currentDay,
  };
}

function findDateFromToday({ howManyDates = 0, type = 'past' }) {
  try {
    const { todayDate, months, dayCount, days, currentMonth, currentYear, currentDate, currentDay } = getDateInfo();
    if (type === 'past') {
      const resultDate = currentDate - howManyDates;
      if (resultDate === 0) {
        // Starting date of the current month
        return new Date(currentYear, todayDate.getMonth(), 0, 0, 0);
      } else if (resultDate > 0) {
        // resultDate of the month
        return new Date(currentYear, todayDate.getMonth(), resultDate, 0, 0, 0);
      } else {
        let prevMonth;
        let prevYear;
        // if negative, then (previous month day count - (negative resultDate))
        if (todayDate.getMonth() !== 0) {
          prevMonth = todayDate.getMonth() - 1;
          const prevDate = dayCount[months[prevMonth]];
          return new Date(currentYear, prevMonth, prevDate + resultDate, 0, 0, 0);
        } else {
          // previous year
          prevYear = currentYear - 1;
          // previous month
          prevMonth = 11; // december
          const prevDate = dayCount[months[prevMonth]];
          return new Date(prevYear, prevMonth, prevDate + resultDate, 0, 0, 0);
        }
      }
    }
  } catch (error) {
    return error;
  }
}

// findDateFromToday({ howManyDates: 27, type: 'past' });

// export default function vanillaDateFns() {
//   return { getDateInfo, findDateFromToday };
// }

export default { getDateInfo, findDateFromToday };
