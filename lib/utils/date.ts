import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

/**
 * Formats a date.
 *
 * @param date - The date to format.
 * @returns The formatted date.
 */
export function formatDate(
	date: Date | string,
	format = 'MMM D, YYYY'
): string {
	const twoMonthsAgo = dayjs().subtract(2, 'month')
	const inputDate = dayjs(date)
	if (inputDate.isAfter(twoMonthsAgo)) {
		return inputDate.fromNow()
	} else {
		return inputDate.format(format)
	}
}
