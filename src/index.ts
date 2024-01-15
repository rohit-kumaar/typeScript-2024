// Start : Function

type TVolumeOfRectangle = (l: number, w: number, h?: number) => number;

const volumeOfRectangle: TVolumeOfRectangle = (l, w, h = 5) => l * w * h;

console.log(volumeOfRectangle(5, 5));

// End   : Function

// Start : Rest Operator

type TRestOperator = (...r: Array<number>) => Array<number>;

const restOperator: TRestOperator = (...r) => r;

console.log(restOperator(1, 2, 3, 4, 5, 6));

// End   : Rest Operator

// Start : Function With Object

interface IProduct {
  readonly _id: string;
  name: string;
  price: number | string;
  stock: number;
  image?: string;
}

type TGetData = (product: IProduct) => IProduct;

const getData: TGetData = (product) => product;

const product: IProduct = {
  _id: "234264756758478",
  name: "Bentley",
  price: "3cr",
  stock: 200,
  image: "mac.jpg",
};

console.log(getData(product));

// End   : Function With Object

// Start : Never Type

const handleError = (): never => {
  throw new Error();
};

// End  : Never Type

// Start : Classes
class Car {
  constructor(
    public name: string,
    private color: string,
    protected model: number | string
  ) {}

  getColor = () => this.color;
}

const car_1 = new Car("Bentley", "Dark Green", "Continental GT Mulliner ");
console.log(car_1);

class Audi extends Car {
  brand: string;
  constructor(
    name: string,
    color: string,
    model: number | string,
    brand: string
  ) {
    super(name, color, model);
    this.brand = brand;
  }
}

// End  : Classes
