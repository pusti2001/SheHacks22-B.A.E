const quizData = [
    {
        question: "What is your age?",
        a: "Less than 50",
        b: "More than 50",
        a1: "a", a2: "b",
    },
    {
        question: "Has anyone in your family had breast cancer before?",
        a: "Yes",
        b: "No",
        a3: "a", a4: "b",
    },
    {
        question: "Have you gained a lot of weight recently?",
        a: "Yes",
        b: "Not really",
        a5: "a", a6: "b",
    },
    {
        question: "Do you exercise regularly?",
        a: "No, I'm not that regualr",
        b: "Totally",
        a7: "a", a8: "b",
    },
    {
        question: "How often do you drink alcohol?",
        a: "More than once a week",
        b: "Occasionally/ I don't drink",
        a9: "a", a10: "b",
    },
    {
        question: "Are you on birth control pills or any other hormones?",
        a: "Ya! I'm on medication",
        b: "No",
        a11: "a", a12: "b",
    },
    {
        question: "Have you felt any pain the nipples lately?",
        a: "Yes, they hurt when I touch them",
        b: "Not exactly",
        a13: "a", a14: "b",
    },
    {
        question: "Are you witnessing flakey skin or redness around your nipples?",
        a: "Yes",
        b: "No",
        a15: "a", a16: "b",
    },
    {
        question: "Is their any change in either or both of your breasts?",
        a: "Ya! They don't look identical",
        b: "Not exactly",
        a17: "a", a18: "b",
    },
    {
        question: "Have you felt a lump around your breast or under your arms?",
        a: "Yes",
        b: "No",
        a19: "a", a20: "b",
    },
    {
        question: "Have your breasts been itching lately?",
        a: "Yes",
        b: "Only when I sweat a lot. Otherwise, no",
        a19: "a", a20: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].a1) {
           score=score+5;
       }
       else if(answer === quizData[currentQuiz].a2){
            score=score+1;
       }
       else if(answer === quizData[currentQuiz].a3){
        score=score+5;
       }
       else if(answer === quizData[currentQuiz].a4){
        score=score+1;
       }
       else if(answer === quizData[currentQuiz].a5) {
        score=score+3;
    }
    else if(answer === quizData[currentQuiz].a6){
         score=score+0;
    }
    else if(answer === quizData[currentQuiz].a7){
     score=score+3;
    }
    else if(answer === quizData[currentQuiz].a8){
     score=score+0;
    }
    else if(answer === quizData[currentQuiz].a9) {
        score=score+4;
    }
    else if(answer === quizData[currentQuiz].a10){
         score=score+0;
    }
    else if(answer === quizData[currentQuiz].a11){
     score=score+5;
    }
    else if(answer === quizData[currentQuiz].a12){
     score=score+1;
    }
    else if(answer === quizData[currentQuiz].a13){
        score=score+5;
   }
   else if(answer === quizData[currentQuiz].a17){
    score=score+1;
   }
   else if(answer === quizData[currentQuiz].a15){
    score=score+5;
   }
   else if(answer === quizData[currentQuiz].a16) {
       score=score+1;
   }
   else if(answer === quizData[currentQuiz].a17){
        score=score+5;
   }
   else if(answer === quizData[currentQuiz].a18){
    score=score+0;
   }
   else if(answer === quizData[currentQuiz].a19){
    score=score+6;
   }
   else if(answer === quizData[currentQuiz].a20){
    score=score+0;
   }
   else if(answer === quizData[currentQuiz].a19){
    score=score+5;
   }
   else if(answer === quizData[currentQuiz].a20){
    score=score+1;
   }


       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <button onclick="location.reload()">Reload</button>
           `
           if(score<=17){
            quiz.innerHTML = `
            <h2 class="res">You are low risk of breast cancer</h2>
            <h4>Having said that, we want you to self examine your breasts on a regular basis and if you find something fishy, then see your gynac</h4>
            <p>This is only an approximate value, and if you develop any symptoms you should consult your doctor immediately.</p>
            <center><p id="demo1"></p></center>
            `
            let text = "Go back to home";
            let result = text.link("https://zealous-hypatia-4200fe.netlify.app/#");
            document.getElementById("demo1").innerHTML = result;
           }
           else if(score>=17 && score<=34){
            quiz.innerHTML = `
            <h2 class="res">You are medium risk of breast cancer</h2>
            <p>This is only an approximate value, and if you develop any symptoms you should consult your doctor immediately.</p>
            <center><p id="demo1"></p></center>
            `
            let text = "Go back to home";
            let result = text.link("https://zealous-hypatia-4200fe.netlify.app/#");
            document.getElementById("demo1").innerHTML = result;
           }
           else{
            quiz.innerHTML = `
            <h2 class="res">You are high risk of breast cancer</h2>
            <h4>Girl, we would like to advise you to meet your gynac ASAP and get your breats checked.</h4>
            <p>This is only an approximate value, and if you develop any symptoms you should consult your doctor immediately.</p>
            <center><p id="demo1"></p></center>
            `
            let text = "Go back to home";
            let result = text.link("https://zealous-hypatia-4200fe.netlify.app/#");
            document.getElementById("demo1").innerHTML = result;
           }
       }
    }
})