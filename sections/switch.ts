export let weekDay: number = 5;
let nameDay: string;

if(weekDay <= 0){
    throw new Error ('Dia de la semana no valido')
}
switch (weekDay) {
    case 1:
        nameDay = 'Lunes'
        break;
    case 2:
        nameDay = 'Martes'
        break;
    case 3:
        nameDay = 'Miércoles'
        break;
    case 4:
        nameDay = 'Jueves'
        break;
    case 5:
        nameDay = 'Viernes'
        break;
    case 6:
        nameDay = 'Sábado'
        break;
    case 7:
        nameDay = 'Domingo'
        break;
    default: nameDay= 'No es un día Valido'
}

console.log('El día de la semana es: ', nameDay)
