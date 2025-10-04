function convertToPoints(grade){
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
    else if (grade == "D"){
    points = 1;
  }
    return points;
}
function calculateGPA(gpaPoints){
    // just doing the math
    const total = gpaPoints.reduce((sum, item) => sum + item, 0);
    return (total / gpaPoints.length).toFixed(2);
}
function getGrades(inputSelector){
    // get the grades from input
    const gradesEl = document.querySelector("#grades");
    // split grades on comma
    let grades = gradesEl.value.split(",");
    // clean up whitespace
    // convert all grades to uppercase
    grades = grades.map((grade) => grade.trim().toUpperCase());
    // return grade list
    return grades;
}
function calculateHandler(event){
    // get the grades
    const grades = getGrades();
    const gpaPoints = grades.map(convertToPoints);
    // calculate the GPA
    const gpa = calculateGPA(gpaPoints);
    // display the GPA
    outputGpa(gpa, "#output");
}
function outputGpa(gpa, selector){
    // display the GPA on the page
    const outputEl = document.querySelector(selector);
    outputEl.innerHTML = `Your GPA is ${gpa}`;
}

document.querySelector("#calculate").addEventListener("click", calculateHandler);