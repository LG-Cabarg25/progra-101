import { firstName } from './sections/Basic-types';
let person = {
    name: 'Luis',
    age: 23,
    isActive: true,
    hobbies: ['Programmer', 'Analysis', 'Sing'],
    toString(){
        let objectString = this.name +' '+ this.age+ ' '+ this.hobbies;
        console.log(objectString);
    }
}

person.toString();