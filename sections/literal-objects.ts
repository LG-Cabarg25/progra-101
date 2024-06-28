
export let person = {
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


let car ={
    marca: 'Toyota',
    modelo: 'Hilux',
    color: 'Rojo',
    anio: 2024,
}

let smartTV={
    marca: 'Samsung',
    tamanio: '42 plg',
    precio: 1800,
    modelo: '4k',
}

let youtubeVideo={
    duracion:'2:54',
    contenido:'Educativo',
    creador:'Devtalls',
    vistas:400024,
}


console.log(car);
console.log(smartTV);
console.log(youtubeVideo)