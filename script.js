var questions = [
  {
    prompt: "What color are apples ?\n(a) Red\n\
             (b) Purple\n(c) Orange",
    answer: "a"
  },
  {
    prompt: "What color are bananas ?\n(a) Teal\n\
             (b) Magenta\n(c) Yellow",
    answer: "c"
  },
  {
    prompt: "What color are strawberries ?\n(a) Yellow\n\
             (b) Red\n(c) Blue",
    answer: "b"
  },
  {
    prompt: "What are the basic colors ?\n(a) White\n\
             (b) Red, Blue & Green\n(c) Black",
    answer: "b"
  },
  {
    prompt: "What is rainbow color ?\n(a) VIBGYOR\n\
             (b) Red\n(c) White",
    answer: "a"
  },
]
var score = 0;

for(var i=0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer) {
    score++;
    alert("Correct Answer !");
  } else {
    alert("Wrong Answer !");
  }
}

alert("You scored " + score + "/" + questions.length);
