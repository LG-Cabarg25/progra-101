



export function printMultipicationTable(base: number, limite: number){

    if(limite<=0 ){
        throw new Error('El limite debe ser mayor a 0');
    }
    for (let i = 1; i <= limite; i++) {
        console.log(base, " * ", i, " = ", base * i);
    }
}