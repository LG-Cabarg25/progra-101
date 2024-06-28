export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let luis: Person ={
    age: 36,
    name: 'Luis',
    isActive: true
};

let Kalu: Person ={
    age: 19,
    name: 'Kalu',
    isActive: true
};

let people: Person[]= [luis,Kalu]

for (let i= 0 ; i< people.length ;i++){
    let person = people[i]
    console.log(person.name+' '+ person.age + ' '+ person.isActive)
}