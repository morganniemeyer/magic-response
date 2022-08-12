const submit = document.getElementById('submit');
const questionContainer = document.getElementById('question');
const fortuneContainer = document.getElementById('fortune');
const results = document.getElementById('results');
const answers = [
    'Yes, definitely',
    'It is certainly not great',
    'It is going to be fantastic',
    'Without a doubt a thing',
    'You may rely on it, heavily',
    'As I see it, yes',
    'Most Likely Maybe',
    'Outlook Inconclusive',
    'Signs point to a $%#!show',
    'Reply hazy, try something new',
    'Ask again never',
    'Better not noooo',
    'Cannot predict, too many variables',
    'Concentrate and do better',
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
