
const contador = () => {
    const fecha = new Date("May 24,2023 00:00:00").getTime(); //Estoy en marzo 24, por lo q falta un mes, 60 dias
    const nueva = new Date().getTime(); //El getTime lo que hace es obtener los milisegundos desde la fecha 1/1/1970

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const diferencia = fecha - nueva;
    //console.log(diferencia);

    let tiempoDias = Math.floor(diferencia / days); //Para obtener solo el numero entero
    let tiempoHoras = Math.floor((diferencia % days) / hours);
    let tiempoMinutes = Math.floor((diferencia % hours) / minutes);
    let tiempoSeconds = Math.floor((diferencia % minutes) / seconds);

    /*Si las horas son menores a 10 quiero que le agregue un 0 adelante, sino imprimo directamente las horas*/    
    tiempoHoras = tiempoHoras < 10 ? "0" + tiempoHoras : tiempoHoras;
    tiempoMinutes = tiempoMinutes < 10 ? "0" + tiempoMinutes:tiempoMinutes;
    tiempoDias = tiempoDias < 10 ? "0" + tiempoDias:tiempoDias;
    tiempoSeconds = tiempoSeconds < 10 ? "0" + tiempoSeconds:tiempoSeconds;
    /*console.log(tiempoDias);
    console.log(tiempoHoras);
    console.log(tiempoSeconds);*/

    let dias = document.querySelector(".dias");
    let horas = document.querySelector(".horas");
    let minutos = document.querySelector(".minutos");
    let segundos = document.querySelector(".segundos");

    dias.innerHTML = tiempoDias;
    horas.innerHTML = tiempoHoras;
    minutos.innerHTML = tiempoMinutes;
    segundos.innerHTML = tiempoSeconds;
    

   


}
setInterval(contador,1000); //Se ejecuta cada un segundo