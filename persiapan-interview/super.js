class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return `I have a ${this.carname}`;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.modelname = model;
    }
    present(){
        return `${super.present()} and it is a ${this.modelname}`;
    }
}

const car = new Car('BMW');
const model = new Model('BMW', 'X5');
console.log(car.present());
console.log(model.present());