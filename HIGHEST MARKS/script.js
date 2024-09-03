const marks = [78, 85, 62, 90, 88];
let highestMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

document.getElementById('highestMarks').textContent = `The highest marks scored are: ${highestMarks}`;
