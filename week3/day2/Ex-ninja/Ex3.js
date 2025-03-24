// Function to calculate average
function findAvg(gradesList) {
    let sum = 0;
    for (let grade of gradesList) {
      sum += grade;
    }
    const average = sum / gradesList.length;
    return average;
  }
  
  // Function to evaluate pass/fail
  function evaluateGrades(gradesList) {
    const average = findAvg(gradesList);
    console.log(`Average grade: ${average.toFixed(2)}`);
  
    if (average > 65) {
      console.log("Congratulations! You passed.");
    } else {
      console.log("You failed and must repeat the course.");
    }
  }
  
  // Example usage
  const grades = [80, 75, 60, 92, 81];
  evaluateGrades(grades);