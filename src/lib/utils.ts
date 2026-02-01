export function capitalize(string: string) {
	if (!string) return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

/**
 * Formats a date string into a localized format.
 * @param date - The date (e.g., Jan 29, 2026 12:17 AM)
 * @param dateStyle - 'full', 'long', 'medium', or 'short'
 * @param locales - Defaulted to 'fr-FR' for France
 */
export function formatDate(
	date: Date,
	dateStyle: DateStyle = 'medium',
	locales: string = 'en-US'
) {
	const dateToFormat = new Date(date);
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return dateFormatter.format(dateToFormat);
}
