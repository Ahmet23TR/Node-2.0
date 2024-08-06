console.log(arguments);
console.log(require("module").wrapper);

const C = require("./test-module-1");
const calc1 = new C();

console.log(calc1.add(3, 5));

// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(add(3, 5));
console.log(multiply(3, 5));
console.log(divide(3, 5));

require("./test-module-3")();
