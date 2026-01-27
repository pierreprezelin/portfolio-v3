export function capitalize(string: string) {
	if (!string) return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

/**
 * Formats a date string into a localized format.
 * @param date - The date string (e.g., '2026/01/21')
 * @param dateStyle - 'full', 'long', 'medium', or 'short'
 * @param locales - Defaulted to 'fr-FR' for France
 */
export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales: string = 'en-US'
) {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return dateFormatter.format(dateToFormat);
}
