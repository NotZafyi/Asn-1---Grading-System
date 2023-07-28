var promptSync = require('prompt-sync')();
var gradeSystem = function () {
    var myName = promptSync("Whats ur name? ");
    var myMarks = promptSync("Enter your marks: ");
    var grades = ["A+", "A", "B", "C", "D", "F"];
    if (myMarks >= 90 && myMarks <= 100) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[0]));
    }
    else if (myMarks >= 80 && myMarks < 90) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[1]));
    }
    else if (myMarks >= 70 && myMarks < 80) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[2]));
    }
    else if (myMarks >= 60 && myMarks < 70) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[3]));
    }
    else if (myMarks >= 40 && myMarks < 60) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[4]));
    }
    else if (myMarks >= 0 && myMarks <= 40) {
        console.log("".concat(myName, ", has scored ").concat(myMarks, ", and your grade is ").concat(grades[5]));
    }
    else {
        console.log("marks cannot be greater than 100, enter valid marks");
    }
};
gradeSystem();
