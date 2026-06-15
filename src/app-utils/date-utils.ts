import { format, isAfter } from "date-fns"

export function getDateString(date: Date) {
    return format(date, 'yyyy-MM-dd')
}

export function getReadableDate(dateString: string) {
    return format(dateString, 'PPP')
}

export function isFutureDate(futureDate: Date, baseDate: Date) {
    return isAfter(futureDate, baseDate)
}