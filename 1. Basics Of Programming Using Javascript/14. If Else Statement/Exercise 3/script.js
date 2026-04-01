let marks = 70;
let attendance = 40;
let grade;

if (marks < 40) {
  grade = "Fail";
} else {
  if (marks < 49) {
    grade = "E";
  } else if (marks < 59) {
    grade = "D";
  } else if (marks < 69) {
    grade = "C";
  } else if (marks < 79) {
    grade = "B";
  } else if (marks < 89) {
    grade = "A";
  } else {
    grade = "A+";
  }

  if (attendance < 75) {
    grade = grade + " (Low Attendance)";
  }
}

console.log(grade);
