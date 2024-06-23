import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DateUtilService {

  public formatDate(date: Date | string | null): string {
    if (date == null) return '';

    // If the input is already a Date object, use it directly
    if (date instanceof Date) {
      return formatDateFromDate(date);
    }

    // If the input is a string, parse it into a Date object
    if (typeof date === 'string') {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return formatDateFromDate(parsedDate);
      }
    }

    // If the input is not valid, return an empty string
    return '';
  }


}
function formatDateFromDate(date: Date): string {
  // Format the date as 'yyyy-MM-dd'
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
//'dd-MM-yyyy'
