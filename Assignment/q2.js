/* Q2. Write a program that grades students based on their marks.
    - If greater than 90 then A Grade
    - If betwen 70 and 90 then a B grade
    - If betwen 50 and 70 then a C grade
    - Below 50 then an F grade
*/

const marks = 70;

if (marks > 90) {
    console.log("A grade");    
} else if (marks >= 70 && marks <= 90) {
    console.log("B grade");
} else if (marks >= 50 && marks <= 70) {
    console.log("C grade");
} else {
    console.log("F grade");
}