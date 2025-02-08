let midterm = Math.random() * 100;
let final = Math.random() * 100;
let finalGrade = midterm * 0.3 + final * 0.7;
let letterGrade;
if (finalGrade >= 90 && finalGrade <= 100) {
    letterGrade = 'A';
} else if (finalGrade >= 80 && finalGrade <= 89) {
    letterGrade = 'B';
} else if (finalGrade >= 70 && finalGrade <= 79) {
    letterGrade = 'C';
} else if (finalGrade >= 60 && finalGrade <= 69) {
    letterGrade = 'D';
} else if (finalGrade >= 50 && finalGrade <= 59) {
    letterGrade = 'E';
} else {
    letterGrade = 'F';
}
console.log(midterm);
console.log(final);
console.log(letterGrade);
