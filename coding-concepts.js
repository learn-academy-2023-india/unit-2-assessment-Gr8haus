// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: In this example, the console log will return "India", "2023"
// b) Verify and explain: When running the node command, 'India', '2023' is returned. The reason is becasue .split is spliting the string into an array of substrings

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: In this example, the console log will return an error as name is undefined. 
// b) Verify and explain: When running the node command, undefined is returned. This is inline with what I believed would happen. I was not aware the return would be that specific. 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: In this example, the console log will return only the odd numbers, just as the console.log is callign for
// b) Verify and explain: When running the node command, only the odd numbers are returned. This is because the condition (number % 2 !== 0) checks to see if the listed numbers are not divisible by 2, and the .filter creates the new array containing only those odd numbers.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: In this example, the console log will return JavaScript. The reason fror this is because (myCodingSkills.languages[0]) is calling on the 0 index in languages. 
// b) Verify and explain: When running the node command, JavaScript is returned. This is because console.log(myCodingSkills.languages[0]) is calling on the first element of the languages array.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: In this example I am not sure what to expect the output to be. 
// b) Verify and explain: When running the node command, Learn { student: 'George', cohort: 'India', year: 2023 } is returned. When looking up this answer, ths is what I found: "Learn: Indicates that the logged object is an instance of the Learn class.
// { student: 'George', cohort: 'India', year: 2023 }: Represents the properties of the learnStudent object. Each property is shown along with its corresponding value.
// In summary, the output provides a visual representation of the properties and values of the learnStudent instance for inspection and debugging purposes.
// I'm honestly very lost when it comes to the outcome of this example and would love a better explanation so I can actually grasp this.  