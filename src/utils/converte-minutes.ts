/**
 * 
 * @param hourString 
 * 18:00 -> 1080
 */
export function converteHoursToMinutes(hourString: String) {
    const[hours, minutos] = hourString.split(':').map(Number);
    const minutes = (hours * 60) + minutos;
    return minutes;
}
