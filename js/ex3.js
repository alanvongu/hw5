//Declare studentList Array
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

const getMinScore = (scores) => {
  return Math.min(...scores);
}

const getMaxScore = (scores) => {
  return Math.max(...scores);
}
const getAvgScore = (scores) => {
  return scores.reduce((add, current) => add + current, 0) / scores.length;
}
const cLastNameResults = studentList
.filter(student => student.lastName[0] === "C")
  .map(student => ({
    firstName: student.firstName,
    lastName: student.lastName,
    minScore: getMinScore(student.scores),
    maxScore: getMaxScore(student.scores),
    avgScore: getAvgScore(student.scores),
  }));

console.log(cLastNameResults);