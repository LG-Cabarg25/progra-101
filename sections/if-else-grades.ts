console.log('RESULTADO ESTUDIANTE: ')

export let grade: number = 99;
let gradeletter: string;

// let gradeLetter: string[] = ['A','B','C','D','F']

// if(grade >= 90){
//     console.log('Su nota es: ', gradeLetter[0] )
// }else if(grade >= 80){
//     console.log('Su nota es: ', gradeLetter[1] )
// }else if(grade >= 70){
//     console.log('Su nota es: ', gradeLetter[2] )
// }else if(grade >= 60){
//     console.log('Su nota es: ', gradeLetter[3] )
// }else{
//     console.log('Su nota es: ', gradeLetter[4] )
// } 

if(grade >= 90){
    gradeletter = 'A';
}else if(grade >= 80){
    gradeletter = 'B';
}else if(grade >= 70){
    gradeletter = 'C';
}else if(grade >= 60){
    gradeletter = 'D';
}else{
    gradeletter = 'F';
}

console.log('La nota del estudante es: ', gradeletter)