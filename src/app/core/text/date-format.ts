/**
 * Formats a date to ISO string format without time offset at universal time.
 * Ensures the server will receive and treat the date this way
 * @param date The date to format
 */
export const serializeDate = (date: Date) => {
    return new Date(date.getTime()
        - date.getTimezoneOffset() * 60 * 1000  // Removing any odd time offset
        + new Date().getTimezoneOffset() * 60 * 1000) // Applying the default time offset
        .toISOString()
}
