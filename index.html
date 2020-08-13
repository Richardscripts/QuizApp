'use strict';

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateWelcomeMsg(){
  return `
    <div class='question-form-css'>
    <h2 class='question-text-css'>Welcome to the most vastly, hugely, mind-bogglingly big Quiz on the internet today!</h2><center><p>Warning:<br> The invention of this App has made a lot of people very angry and been widely regarded as a bad move.</p></center><br><hr>
      <form class='welcome-form-jq'>
        <div class='button-wrapper'>
          <button tabindex="0" type='submit' id='ready' class='myButton'>Ready</button>
        </div>
      </form>
    </div>`;
}

function generateQuiz() {
  let i = STORE.questionNumber;
  return `
    <div class='question-form-css fadeIn-animate'>
      <div class='robot-container'>
        <img src='images/robot.png' class='robot-image' alt='A robot looking pensively down.'>
      </div>
      <div class='question-text-css'>${STORE.questions[i].question}</div><hr>
      <form class='quiz-form-jq'>
        <label class="container-css">${STORE.questions[i].answers[0]}
          <input type="radio" name='radio' value="${STORE.questions[i].answers[0]}" required>
          <span class="checkmark"></span><br>
        </label>
        <label class="container-css">${STORE.questions[i].answers[1]}
          <input type="radio" name='radio' value="${STORE.questions[i].answers[1]}">
          <span class="checkmark"></span><br>
        </label>
        <label class="container-css">${STORE.questions[i].answers[2]}
          <input type="radio" name='radio' value="${STORE.questions[i].answers[2]}">
          <span class="checkmark"></span><br>
        </label>
        <label class="container-css">${STORE.questions[i].answers[3]}
          <input type="radio" name='radio' value="${STORE.questions[i].answers[3]}">
          <span class="checkmark"></span><br>
        </label>
        <div class='button-wrapper'>
          <button type='submit' id='submit' class='myButton'>Submit</button>
        </div>
      </form>
      <div class='score-card'>Correct Answers: ${STORE.score}/${STORE.questions.length}</div>
      <div class='progress-bar'>
        <progress id="progress" value="${STORE.questionNumber}" max="${STORE.questions.length}"></progress>
      </div>
    </div>`;
}

function generateTextualFeedback(){
  return `
    <div class='question-form-css fadeIn-animate'>
      <div class='feedback-image-containers'>
        ${STORE.questions[STORE.questionNumber].feedbackImage}
      </div>
    <h2 class='question-text-css'>The answer: ${STORE.questions[STORE.questionNumber].correctAnswer}</h2><hr>
    <p>${STORE.questions[STORE.questionNumber].feedbackText}</p>
      <form class='feedback-form-jq'>
        <div class='button-wrapper'>
          <button type='submit' id='next' class='myButton'>Next</button>
        </div>
      </form>
    </div>`;
}

function generateFinalScreen(){
  return `
    <div class='question-form-css fadeIn-animate'>
      <div class='feedback-image-containers'>
        <img src='images/thumbs-up.png' class='rotate-animate' alt='A thumb ready for hitchhiking'>
      </div>
    <h2 class='question-text-css'>You've reached the end!</h2><center><p>Not too shabby! You've got ${STORE.score/STORE.questions.length*100}% right.<br> You're ready to hitchhike across the galaxy! Or click below if you have the tolerance to try this quiz another time!</p></center><br><hr>
      <form class='restart-form-jq'>
        <div class='button-wrapper'>
          <button type='submit' id='restart' class='myButton'>Try again?</button>
        </div>
      </form>
  </div>`;
}

/********** RENDER FUNCTION(S) **********/

function renderForm(){
  if(STORE.quizStarted === true){
    $('main').html(generateQuiz());
  } else {
    $('main').html(generateWelcomeMsg()); 
  }
}

function renderFeedback(){
  $('main').html(generateTextualFeedback());
}

function renderFinalScreen(){
  $('main').html(generateFinalScreen());
}

/********** EVENT HANDLER FUNCTIONS **********/

$('main').on('submit','.quiz-form-jq', submitAnswer);

$('main').on('submit','.welcome-form-jq', submitReady);

$('main').on('submit','.feedback-form-jq', submitNext);

$('main').on('submit','.restart-form-jq', submitRestart);

// These functions handle events (submit, click, etc)

function submitAnswer(){
  event.preventDefault();
  let answer = $('input[name=radio]:checked').val();
  if (STORE.questions[STORE.questionNumber].correctAnswer === answer) {
    STORE.score++;
    renderFeedback();
  } else {
    renderFeedback();
  }
}

function submitReady(){
  event.preventDefault();
  STORE.quizStarted = true;
  renderForm();
}

function submitNext(){
  event.preventDefault();
  if(STORE.questionNumber === STORE.questions.length - 1){
    renderFinalScreen();
  }else{
    STORE.questionNumber++;
    renderForm();
  }
}

function submitRestart(){
  event.preventDefault();
  STORE.questionNumber = 0;
  STORE.quizStarted = false;
  STORE.score = 0;
  renderForm();
}

function main(){
  renderForm();
}

$(main);
