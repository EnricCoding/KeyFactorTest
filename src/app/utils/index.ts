export function convertTimestampToDate(timestamp: string): string {
    const fecha = new Date(Number(timestamp) * 1000); 
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
    const anio = fecha.getFullYear();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    const formatoFechaHora = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
    return formatoFechaHora;
}