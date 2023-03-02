const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

// Extra credit 
for (let i = 0; i < studentList.length; i++) {
  const scores = studentList[i].scores;
  for (let j = 0; j < scores.length; j++) {
    scores[j] += 5;
  }
}
// Missing exam score
let totalScore = 0;
for (let i = 0; i < studentList.length; i++) {
  const scores = studentList[i].scores;
  let numScores = scores.length;
  for (let j = 0; j < scores.length; j++) {
    totalScore += scores[j];
  }
  const avgScore = totalScore / numScores;
  scores.push(avgScore);
}
studentList.forEach(student => {
    const fullName = `${student.firstName} ${student.lastName}`;
    const formattedScores = student.scores.join(', ');
    console.log(`Full Name: (Last, First): ${student.lastName}, ${student.firstName}\nUpdated scores are: (${formattedScores})`);
  });