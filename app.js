const submit = document.getElementById('submit');
const questionContainer = document.getElementById('personal-response');
const fortuneContainer = document.getElementById('fortune');
const results = document.getElementById('results');
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'Bad idea Bud',
    'This is a Hot Mess',
];

submit.addEventListener('click', () => {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    const randNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randNum];
    console.log(randomAnswer);
    results.textContent = randomAnswer;
});
