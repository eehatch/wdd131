const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}<?li>`;    //the html string made from step
}
const stepsHtml = steps.map(listTemplate);  // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML, the "" removed commas!


const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade == "A")
    {
      points = 4;
    } 
  else if (grade == "B"){
    points = 3;
  }
  else if (grade == "C"){
    points = 2;
  }
  return points;
}

//  convert an array of grades into an array of gpaPoints.
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) { // reduce takes the many elements you input and reduce it to one element based on your equation
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
    // const pointsTotal = gpaPoints.reduce((total, item) => total + item);
    // const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
    // const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


// Using filter keep only the fruits that are smaller than 6 characters.
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const smallFruits = fruits.filter(function (fruit) {
  return fruit.length < 6;
});

//same thing with an arrow function
    //const smallFruits = fruits.filter((fruit) => fruit.length < 6);

// indexOf
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);