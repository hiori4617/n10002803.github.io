let students = ["Hiori", "Mirai", "Rira"];
let grades = new Array(70, 80, 90);
let isPresent = Array.of(false, false, true);

console.log(students[0]);
grades[1] = 85;
console.log(grades);

students.push("Erika");
let lastIsPresent = isPresent.pop();
console.log(students);
console.log(isPresent);

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
grades.forEach(grade => console.log(grade));
for (let present of isPresent){
    console.log(present);
}
for (let [index, student] of students.entries()) {
  console.log(index, student);
}

let passedGrades = grades.filter(grade => grade >= 50);
let doubledGrades = grades.map(grade => grade * 2)
console.log(passedGrades);
console.log(doubledGrades);
