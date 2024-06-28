export class Car {
    brand: string;
    doors: number;
    fullTank: number;
    isRunnig: boolean;
    type: string;
  
    createdAt: number;
  
    constructor(brand: string, type: string) {
      this.brand = brand;
      this.doors = 0;
      this.fullTank = 0;
      this.isRunnig = false;
      this.type = type;
  
      this.createdAt = 123456;
    }
  
    turnOn() {
      if (this.isRunnig) {
        console.log("El carro ya estaba encendido.. y se daño el motor");
        return;
      }
      if (this.fullTank <= 0) {
        console.log("El carro no tiene Gasolina");
        return;
      }
      this.isRunnig = true;
      console.log("El carro está encendido");
    }
  
    fillTank(gas: number) {
      if (gas <= 0) {
        console.log("El gas tiene que ser positivo");
        return;
      }
  
      let newFullTank = this.fullTank + gas;
      if (newFullTank >= 100) {
        newFullTank = 100;
      }
      this.fullTank = newFullTank;
    }
  }
  
  let myMazda = new Car('Toyota', 'Sedan');
  
  myMazda.fillTank(50);
  myMazda.fillTank(20);
  console.log(myMazda);
  