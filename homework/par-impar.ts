export let arrayN : number[] = [1,6,8,4,2,7,10,3,5]

for(let i=0; i < arrayN.length;i++){
    if(arrayN[i] %2 ==0){
        console.log(arrayN[i] + ' es un número par');
    }else{
        console.log(arrayN[i] + ' es un número impar');
    }

}