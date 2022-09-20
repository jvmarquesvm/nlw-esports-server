/**
 * 
 * @param minutes 
 *  1080 => 18:00
 */
 export function converteMinutesToHours(minutes: number) {
    const horas = Math.floor(minutes / 60 )
    const minutos = minutes % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2,'0')}`;
}