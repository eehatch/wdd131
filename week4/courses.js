
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: 
  [
    { sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'
    }, 
    {
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
    }
],
  enrollStudent: function(sectionNum){
    console.log("in enrollStudents", this);
    const section = this.sections.find(
        (section) => section.sectionNum === sectionNum
    );
    console.log(section);
  }
};

// different ways to do the same thing
// const fieldName = "code";
// acourse["code"]
// aCourse.code
// acourse[fieldName]

// the room of the first section
// acourse.sections[0].roomNum

function setCourseInfo(course){
    const nameEl = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    nameEl.textContent = course.name;
    courseCode.textContent = course.code;
}
function sectionTemplate(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}
function printSections(sections){
    //get a reference to the sections element
    const sectionsEl = document.querySelector("#sections");
    // transform each section from an object into an HTML string
    const htmlStrings = sections.map(sectionTemplate);
    // insert the html strings into the sections element
    sectionsEl.innerHTML = htmlStrings.join("");

}
    setCourseInfo(aCourse);
    printSections(aCourse.sections);

    function clickHandler(event){
        //get the section number from the input
        console.lot("in clickHandler", this);
        //call the enrollStudent function with that section number
        aCourse.enrollStudent(2);
    }
    document.querySelector("#enrollStudent").addEventListener("click", clickHandler);
    aCourse.enrollStudent(2);