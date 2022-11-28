//Challenge 1: Student Grade Generator (Toy Problem)

// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


//Whichever condition the provided marks fit, the block inside the curly brackets is executed. 

function studentGrade () {
   //studentMarks is the variable name of the marks provided by the students
   let studentMarks = prompt('Enter your marks');

    if (studentMarks >79) {
        //if student inputs marks greater than 79, it prints an A!
        return `A`;
    }   else if (studentMarks >= 60) {
        //if student inputs marks greater than or equal to 60 and less than 79, it prints a B!
        return `B`;
    }   else if (studentMarks >49) {
        //if student inputs marks greater than 49 and less than 60, it prints a C!
        return `C`;
    }   else if (studentMarks >=40){
        //marks greater than or equal to 40 and less than 50, it prints a D! 
        return `D`;
    }   else if (studentMarks <40) {
        //marks less than 40, prints an E!
        return `E`;
    }

else {
    //if the student enters anything outside the set parameters, the code prints this
    console.log(`Please, enter valid student marks.`);
}

}
//this calls the studentGrade function
studentGrade();



