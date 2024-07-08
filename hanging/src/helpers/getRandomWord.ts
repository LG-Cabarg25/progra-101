let words : string []=[
    'COMPUTADORA',    
    'AGUACATE',
    'TELEFONO',
    'CUADERNO',
    'ZAPATO',
    'VEHICULO',
    'LUNA',    
]



export function getRandomWord (){
    const RandomIndex =Math.floor( Math.random()* words.length);
    return words[RandomIndex]
}