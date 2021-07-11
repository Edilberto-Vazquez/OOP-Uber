const Car = require("./Car");
const Account = require("./Account");

const car = new Car("AMD123", new Account("Juan", "JUAN123"));

car.printDataCar();
