//  Author: Emily Hatch
const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
// area = radius * radius * PI;
console.log("Area1:", area);
area = circleArea(4);
// area = radius * radius * PI;
console.log("Area2:", area);

