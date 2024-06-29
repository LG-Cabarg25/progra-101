function largesNameOfArray (nameArray : string[]){
    let largesName= '';
    for(let i = 0; i<nameArray.length;i++){
        let name = nameArray[i];
        if(name.length>largesName.length){
            largesName=name;
        }
    }
        return largesName;
}

export let heroes = ['Deadpool','Ciclope','Hulk','American Captain']
let hero = largesNameOfArray(heroes);
console.log(hero)