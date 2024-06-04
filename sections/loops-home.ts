export let numberOpc: number = 3;
export let base: number = 10;
export let limite: number = 10;
export let resultado: number;
export let i: number = 1;

switch (numberOpc) {
    case 1:
        for (let i = 1; i <= limite; i++) {
            resultado = base * i;
            console.log(base, " * ", i, " = ", resultado);
        }
        break;
    case 2:
        while (i <= limite) {
            resultado = base * i;
            console.log(base, " * ", i, " = ", resultado);
            i++;
        }
        break;
    case 3:
        do {
            resultado = base * i;
            console.log(base, " * ", i, " = ", resultado);
            i++;
        } while (i <= limite);
        break;
    default:
        console.log("No es una opcion del menú");
}
