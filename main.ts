// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if
// any).
type Employees = {
  name: string;
  department: string;
  contact?: {
    phone: Number;
    email: string;
  };
  role: "manager" | "engineer" | "Intern";
  skill: string[];
};
const employees: Employees = {
  name: "jaweriya",
  department: "governer House",
  role: "engineer",
  skill: ["editing"],
};
console.log(employees);

const employees1: Employees = {
  name: " mutaiba",
  department: "governer house",
  role: "engineer",
  skill: ["web developer"],
  contact: {
    phone: 1234567890,
    email: "mutaiba chohan@gmail.com",
  },
};
console.log(employees1);

//      Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower.

type car = {
  engine: {
    horsepower: number;
  };
  getpowerhouse: () => void;
};
const ourcar: car = {
  engine: {
    horsepower: 1000,
  },
  getpowerhouse: () => {
    console.log(`This car speed is ${ourcar.engine.horsepower}power`);
  },
};
ourcar.getpowerhouse();
// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue).
type Product = {
  name: string;
  price: number;
  color: string;
  inventory: {
    stock: number;
    colorOptions?: ["black", "red", "blushpink", "white", "levender", "aqua"];
    changeColor: (newColor: string) => any;
  };
};

let Tshirt: Product = {
  name: "cotton craft",
  price: 9999,
  color: "lavender",
  inventory: {
    stock: 10,
    changeColor: (newColor: string) => {
      Tshirt.color = newColor;
      if (Tshirt.color === "blushpink") {
        let iPercent10 = (Tshirt.price / 100) * 10;
        Tshirt.price += iPercent10;
      } else if (Tshirt.color === "aqua") {
        let dPercent5 = (Tshirt.price / 100) * 5;
        Tshirt.price - +dPercent5;
      } else {
        return null;
      }
    },
  },
};

console.log(Tshirt);
Tshirt.inventory.changeColor("blushpink");
console.log(Tshirt);
