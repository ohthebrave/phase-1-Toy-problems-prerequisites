// Write a function that prompts the user to input student marks. The input should be between 0 and 100. 
// The output should correspond the correct grade, as shown below: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


// name of the function that has 1 parameter to store marks value and get passed as an argument 
function gradeGenerator(totalMarks) {
    let result = 0;
//if condition
    if (totalMarks > 79 && totalMarks <= 100) {
//checks if the first statement is true and returns the value if its true
        return result = "A";
    } else if (totalMarks > 59 && totalMarks < 80) {
        return result = "B";
    } else if (totalMarks > 48 && totalMarks < 60) {
        return result = "C";
    } else if (totalMarks > 39 && totalMarks < 50) {
        return result = "D";
    } else {
//if the all the above statements are not true it returns grade "E"
        return result = "E";
    }
}





