const readlineSync = require("readline-sync");
const side = readlineSync.question("Enter the side of the cube ");
console.log("Area ", side * side)
console.log("Perimeter ", 4 * side)
console.log("Surface Area ", 6 * side * side)
console.log("Volume ", side * side * side)