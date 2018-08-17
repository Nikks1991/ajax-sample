// Accepts Date object and return new Date with houres set to midnight
export function midnight(date) {
    const d = new Date(date);
    const midnight = date.setHours(0, 0, 0, 0);

    return midnight;
}

// Accepts Date object and return new Date with future date (tommorrow)
export function futureDate(date) {
    const d = new Date(date);
    const future = d.setDate(d.getDate() + 1);

    return future;
}

// Accepts Date object and return Date value in milliseconds
export function dateInMilliseconds(date) {
    const d = new Date(date);
    const milliseconds = d.valueOf();

    return milliseconds;
}
