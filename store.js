'use strict';

const STORE = { 
  questions: [{
    question: 'What is the meaning of life?',
    answers: [
      '42.',
      'A good job with a spouse and kids.',
      'TypeError: life is not a function.',
      '42 + 1.'

    ],
    correctAnswer: '42.',
    feedbackText: '42 (or forty-two) is the Answer to the Ultimate Question of Life, the Universe and Everything of course! This Answer was first calculated by the supercomputer Deep Thought after seven and a half million years of thought. This shocking answer resulted in the construction of an even larger supercomputer, named Earth, which was tasked with determining what the question was in the first place. Now you know.',
    feedbackImage: "<img src='images/computer.png' class='feedback-images' alt='A small computer'>"
  },
  {
    question: 'What is the most massively useful thing an interstellar hitchhiker can have?',
    answers: [
      'Towel.',
      'Spaceship.',
      'Douglas Adam\'s Brain.',
      'Point of View Gun.'
    ],
    correctAnswer: 'Towel.',
    feedbackText: 'A towel is about the most massively useful thing an interstellar hitchhiker can have. Partly it has great practical value. You can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble-sanded beaches of Santraginus V, inhaling the heady sea vapors; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a miniraft down the slow heavy River Moth; wet it for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or avoid the gaze of the Ravenous Bugblatter Beast of Traal (such a mind-boggingly stupid animal, it assumes that if you can\'t see it, it can\'t see you); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough.',
    feedbackImage: "<img src='images/towel.png' class='feedback-images' alt='A small massively useful item called a towel'>"
  },
 

  {
    question: 'Who has the third worst poetry in the galaxy?',
    answers: [
      'Vogons.',
      'Azgoths of Kria.',
      'Paula Nancy Millstone Jennings.',
      'My highschool poetry.'
    ],
    correctAnswer: 'Vogons.',
    feedbackText: '<h3><em>Oh freddled gruntbuggly,<br>Thy micturations are to me<br>As plurdled gabbleblotchits on a lurgid bee.<br>Groop, I implore thee, my foonting turlingdromes,<br>And hooptiously drangle me with crinkly bindlewurdles,<br>Or I will rend thee in the gobberwarts<br>With my blurglecruncheon, see if I don\'t!</em></h3><br><br><center><blockquote>The creators of this app would like to formally apologize for subjecting anyone to Vogon Poetry.</blockquote></center>',
    feedbackImage: "<img src='images/monster.png' class='feedback-images' alt='A monster that is most deadly when being emotional'>"
  },

  {
    question: 'What is the definition of the word infinite?',
    answers: [
      'The highest number.',
      'The lowest number.',
      'A human construct.',
      'Bigger than the biggest thing ever and then some. Much bigger than that in fact, really amazingly immense, a totally stunning size, wow, that\'s big, time. Infinity is just so big that by comparison, bigness itself looks really titchy. Gigantic multiplied by colossal multiplied by staggeringly huge is the sort of concept we\'re trying to get across here.'
    ],
    correctAnswer: 'Bigger than the biggest thing ever and then some. Much bigger than that in fact, really amazingly immense, a totally stunning size, wow, that\'s big, time. Infinity is just so big that by comparison, bigness itself looks really titchy. Gigantic multiplied by colossal multiplied by staggeringly huge is the sort of concept we\'re trying to get across here.',
    feedbackText: '<center>I think we said enough, eh?</center>',
    feedbackImage: "<img src='images/infinite.png' class='feedback-images' alt='The symbol for infinity'>"
  },


  {
    question: 'If time is an illusion, what is doubly so?',
    answers: [
      'The Universe.',
      'Lunchtime.',
      'The idea of us passing this Quiz App Test.',
      'An illusion.'
    ],
    correctAnswer: 'Lunchtime.',
    feedbackText: '"The real nature of time is a deep question that is not well understood by human beings, whether they are philosophers or scientists and especially when they are frantically looking at their clock to see if they have 5 more minutes before they have to clock back in to work from their lunch break.<br><br> Time seems to go faster when you are doing something you like, e.g. having lunch, than when you are doing something you don\'t like, e.g. working. Linking these two ideas, one important and one rather trivial, is intended by the writer to be humorous. Many people for some reason actually find this quote by Douglas Adams very funny."<br><br><h3>- Some guy named Clive on the internet</center></h3>',
    feedbackImage: "<img src='images/sandwich.png' class='feedback-images' alt='A small sandwich'>"
  }

  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

