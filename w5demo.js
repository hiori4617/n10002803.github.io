function calculateArea(length, width = 10) {
   return length * width;
}

let area = calculateArea(20, 10);
console.log("Area: ", area);

console.log("Area 2:", calculateArea(30));
console.log("Area 3: ", calculateArea());
console.log("Area 4: ", calculateArea(2, 3, 4));
