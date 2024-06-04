

export let employees: string[] =['Juan','Luna','Beto'];
export let salaries: number[] = [1800,2300,2150]
export let flowers: string[] = ['Lirio','Rosa','Margarita','Clavel']

// for (let i = 0; i< flowers.length ; i ++){
//     console.log('Flor indice  [', i, '] es: ', flowers[i])
// }

for (let i=0; i < employees.length;i++){
    let employee = employees[i];
    let salary = salaries[i];
    console.log(employee + ' Tiene un salario de: ' + salary)
}
// for(let i = 0 ;i < employees.length; i++){
//     console.log(employees[i])
// }

// for(let i=0; i< salaries.length; i ++){
//     console.log('El empleado: ', employees[i], ' Tiene un salario de: ', salaries[i])

// }

