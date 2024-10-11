const readline = require('readline');

const questions = [
  {
    question: "Who is the shortest person to win the MVP?",
    options: ["1. Isaiah Thomas", "2. Nate Robinson", "3. Allen Iverson", "4. Spud Webb"],
    answer: 3
  },
  {
    question: "Who dropped 13 points in 33 seconds against the Spurs?",
    options: ["1. Kobe Bryant", "2. Tracy McGrady", "3. Vince Carter", "4. Shaq"],
    answer: 2
  },
  {
    question: "Who scored the second most points in an NBA game (81 points)?",
    options: ["1. Devin Booker","2. Jayson Tatum", "3. Kobe Bryant", "4. Michael Jordan"],
    answer: 3
  },
  {
    question: "Who is the youngest player to win the NBA MVP?",
    options:["1. Michael Jordan", "2. Nikolas Jovic", "3. James Harden", "4. Derrick Rose"],
    answer: 4
  },
  {
    question: "Who has been a Defensive Player of the Year?",
    options: ["1. Hakeem Olajuwon", "2. Ben Wallace", "3. Rudy Gobert", "4. All Of Above"],
    answer: 4
  },
  {
    question: "Who is number one on the all-time NBA scoring list?",
    options:["1. Kareem Abdul-Jabbar", "2. Karl Malone", "3. Michael Jordan", "4. LeBron James"],
    answer: 4
  },
  {
    question: "Which undrafted player is the only player in the NBA Hall of Fame?",
    options:["1. John Starks", "2. Bruce Bowen", "3. Ben Wallace", "4. Udonis Haslem"],
    answer: 3
  },
  {
    question: "Who is the only active NBA franchise with multiple Finals appearances and no losses?",
    options:["1. Chicago Bulls", "2. Detroit Pistons", "3. Los Angeles Lakers", "4. New York Knicks"],
    answer: 1
  },
  {
    question: "Which player managed to win the NBA Finals MVP Award, even though they were on the losing team?",
    options:["1. LeBron James", "2. Reggie Miller", "3. Jerry West", "4. Dirk Nowitzki"],
    answer: 3
  },
  {
    question: "Who is the Detroit Pistons career leader in points, assists, and steals?",
    options:["1. Chauncey Billups", "2. Isiah Thomas", "3. Rip Hamilton", "4. Dave Bing"],
    answer: 2
  }
];

let score = 0;
let index = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startMenu = () => {
  console.log("\nWelcome to the NBA Quiz Game!");
  console.log("\nYou will be asked 10 multiple-choice questions.");
  console.log("Please enter the number of your answer (1, 2, 3, or 4).");
  console.log("Let's begin!\n");
  askQuestion();
};

const askQuestion = () => {
  if (index < questions.length) {
    const currentQuestion = questions[index];
    console.log(currentQuestion.question);
    currentQuestion.options.forEach(option => console.log(option));
    rl.question("\nEnter the number of your answer: ", (answer) => {
      validateAnswer(answer);
    });
  } else {
    endQuiz();
  }
};

const validateAnswer = (answer) => {
  const currentQuestion = questions[index];
  if (parseInt(answer) === currentQuestion.answer) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(`Incorrect. The correct answer is: ${currentQuestion.options[currentQuestion.answer - 1]}\n`);
  }
  index++;
  askQuestion();
};

const endQuiz = () => {
  console.log(`\nQuiz Over! Your final score is: ${score} out of ${questions.length}\n`);
  rl.question("Do you want to play again? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      score = 0;
      index = 0;
      startMenu();
    } else {
      console.log("\nThank you for playing! Goodbye.\n");
      rl.close();
    }
  });
};

startMenu();
