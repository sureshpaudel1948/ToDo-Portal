// utils/dateutils.ts

export function formatDate(inputDate: string | Date): string {
  const date =
    typeof inputDate === "string" ? new Date(inputDate) : inputDate;

  if (isNaN(date.getTime())) return "Invalid Date";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function getTodayDate(): string {
  const today = new Date();
  // Avoid timezone offset issues by using local values directly
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isSameDate(date1: string | Date, date2: string | Date): boolean {
  return formatDate(date1) === formatDate(date2);
}
