interface Time {
    start: Date;
    end: Date;
  }

const formatCurrency = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const extractDayFromDate = (dateString: string): number => {
  // Split the date string by '/'
  const dateParts = dateString.split("/");

  // Convert the day part to a number and return it
  const day = parseInt(dateParts[0], 10);

  return day;
};

const getWeekForDate = (date: Date): Time => {
  // Clone the date object to avoid modifying the original date
  const currentDate = new Date(date);
  
  // Move to the Monday of the current week
  const dayOfWeek = currentDate.getDay();
  const diffToMonday = (dayOfWeek + 6) % 7; // Calculate difference to the previous Monday
  const start = new Date(currentDate);
  start.setDate(currentDate.getDate() - diffToMonday);
  
  // Move to the Sunday of the current week
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  
  return { start, end };
}

function getMonthPeriodForDate(date: Date): Time {
    // Clone the date object to avoid modifying the original date
    const currentDate = new Date(date);
    
    // Get the first day of the month
    const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    
    // Get the last day of the month
    const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    return { start, end };
  }

  const extractDatePart = (dateString: string, cutString: 'day' | 'month'): string => {
    const parts = dateString.split('/');
    if (cutString === 'day') {
      return parts[0];
    } else if (cutString === 'month') {
      return `${parts[0]}/${parts[1]}`;
    } else {
      throw new Error('Invalid cutString parameter. It should be either "day" or "month".');
    }
  }

  // Format the dates as DD/MM/YYYY
  const formatDate = (date: Date | undefined): string => {
    if(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } else {
        return ''
    }
  }

export default {
  formatCurrency,
  extractDayFromDate,
  getWeekForDate,
  getMonthPeriodForDate,
  extractDatePart,
  formatDate
};
