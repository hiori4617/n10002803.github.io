let student = ['Bob', 'Sam', 'Any', 'Ben'];
let cities = ['Vancourver', 'Toronto', 'Tokyo'];
printArrayElements(cities);

function printArray(arr) {
    console.log();
    for (const element of arr) {
        console.log(element);
    }
}

let printArray = function(arr) {
    console.log(arr);
}

printArray(cities);

let printArr = (arr) => console.log(arr);
printArr(student);

