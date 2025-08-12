export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return "Invalid Date";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function getTodayDate(): string {
  const today = new Date();
  return formatDate(today.toISOString());
}

export function isSameDate(date1: string, date2: string): boolean {
  return formatDate(date1) === formatDate(date2);
}
