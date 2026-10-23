function ShowAlert(){
    alert("Click Me Button Clicked Using HTML Event");

}

document.getElementById("clickbutton").addEventListener("click",showalert2);

function  showalert2() {
    alert("Click Me Button Clicked Using java script Event")
}

document.getElementById("box").addEventListener("click",() => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});

       
// Runs when the mouse enters a course element
       
function showMessage(element) {
element.innerText = "Explore this course!";
}

// Runs when the mouse leaves the course element
function restoreMessage(element) {
  const courses = {
                "Web Development": "Web Development",
                "Python Programming": "Python Programming",
                "Data Science": "Data Science"
};

// Restore the original course name
const selected = element.getAttribute("onclick")
     .match(/'([^']+)'/)[1];

 element.innerText = courses[selected];
 }

 // Runs when a course is clicked
    function selectCourse(courseName) {
        document.getElementById("message").innerText =
            "Selected course: " + courseName;
        }