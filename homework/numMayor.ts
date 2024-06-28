
export let numeros : number[] = [1,6,8,4,17,2,7,10,3,5];

let numMayor = numeros[0]

for(let i=0;i < numeros.length ;i++){
    numeros[i]>numMayor? numMayor = numeros[i] : 'valor'}

console.log('El numero mayor es: ',numMayor)