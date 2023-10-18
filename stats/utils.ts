export const dateStringToDate = (dateString: string): Date => {
    const [days, month, year] = dateString.split("/").map((value: string): number => {
        return parseInt(value);
    });

    return new Date(year, month - 1, days);
}