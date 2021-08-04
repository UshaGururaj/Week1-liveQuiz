var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name?\n");
console.log("Welcome "+userName+"!");
var score=0;
var highScore=6;
var quizQuestions = [
  {
    question:"which is my favorite movie?\n",
    answer:"The pursuit of Happiness"
  },
  {
    question:"which is my favorite web series?\n",
    answer:"Sherlock Holmes"
  },
  {
    question:"which is my favorite color?\n",
    answer:"Black"
  },
  {
    question:"which is my favorite city?\n",
    answer:"Bangalore"
  },
  {
    question:"Who is my favorite writer?\n",
    answer:"Tejasvi"
  },
  {
    question:"which is my favorite musical instrument?\n",
    answer:"Guitar"
  }
];

for(var i=0;i<quizQuestions.length;i++){
  quiz(quizQuestions[i].question,quizQuestions[i].answer);
}

function quiz(qtn,ans){
  var userAnswer = readlineSync.question(qtn);
  if(userAnswer.toUpperCase()==ans.toUpperCase()){
    console.log("Yeah, you're right!");
    score +=1;
  }else{
    console.log("Ohh,you're wrong dear :(")
    
  }
  console.log("Your current score is "+score);
}

console.log("Hey "+userName+", your final score is "+score);
if(score>=highScore){
  console.log("Hey buddy,you got highest points..!Send me a screenshot quickly..will update your name in highest scorers list");
}