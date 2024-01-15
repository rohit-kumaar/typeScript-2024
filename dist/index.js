"use strict";
// Start : Function
const volumeOfRectangle = (l, w, h = 5) => l * w * h;
console.log(volumeOfRectangle(5, 5));
const restOperator = (...r) => r;
console.log(restOperator(1, 2, 3, 4, 5, 6));
const getData = (product) => product;
const product = {
    _id: "234264756758478",
    name: "Bentley",
    price: "3cr",
    stock: 200,
    image: "mac.jpg",
};
console.log(getData(product));
// End   : Function With Object
// Start : Never Type
const handleError = () => {
    throw new Error();
};
// End  : Never Type
// Start : Classes
class Car {
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.getColor = () => this.color;
    }
}
const car_1 = new Car("Bentley", "Dark Green", "Continental GT Mulliner ");
console.log(car_1);
class Audi extends Car {
    constructor(name, color, model, brand) {
        super(name, color, model);
        this.brand = brand;
    }
}
// End  : Classes
