const quizzData = [
  {
    question: "what is this programming language",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C++",
    correct:"c"
  },{
    question: "who is a basketball player",
    a: "Lebron James",
    b: "Ed Sheron",
    c: "Ruofei",
    d: "Barack Obama",
    correct:"a"
  },{
    question: "which year is this",
    a: "1998",
    b: "2099",
    c: "2020",
    d: "2021",
    correct:"d"
  },{
    question: "who is a basketball player",
    a: "Lebron James",
    b: "Ed Sheron",
    c: "Ruofei",
    d: "Barack Obama",
    correct:"a"
  },{
    question: "when did I graduated",
    a: "2020",
    b: "2019",
    c: "2018",
    d: "2017",
    correct:"c"
  }
];

let totalScore = 5;
let currentQuestion = 0;
let score = 0;

function loadQuiz(){
  let answerEls = document.getElementsByClassName("answer");
  for(let ae of answerEls){
    if (ae.checked){
      ae.checked = false;
    }
  }
  let question = quizzData[currentQuestion].question;
  let questionEl = document.getElementById("question");
  questionEl.innerText = question;

  let option_a = document.getElementById("option_a");
  option_a.innerText = quizzData[currentQuestion].a;

  let option_b = document.getElementById("option_b");
  option_b.innerText = quizzData[currentQuestion].b;

  let option_c = document.getElementById("option_c");
  option_c.innerText = quizzData[currentQuestion].c;

  let option_d = document.getElementById("option_d");
  option_d.innerText = quizzData[currentQuestion].d;

}

function getSelected(){
  let answerEls = document.getElementsByClassName("answer");
  let answer = undefined;
  for(let ae of answerEls){
    if (ae.checked){
      answer = ae.id;
      if (quizzData[currentQuestion].correct === answer){
        score++;
      }
    }
  }
  return answer;
}

function setupSubmitBtn(){
  let submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", ()=>{
    let answer = getSelected();
    console.log(answer);
    currentQuestion++;
    if(currentQuestion < quizzData.length){
      loadQuiz();
    }else{
      alert("you have finished!" + `${score}` + "/" + `${totalScore}`);
    }
  }); 
}

loadQuiz();
setupSubmitBtn();