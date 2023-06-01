const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let counter = 0;
let lives = 3
let message = document.getElementById('description');
let hint = document.getElementById('hint');

function displayExplanation() {
    message.innerHTML = movies[counter%(movies.length)].explanation;
}

displayExplanation();

function checkGuess(event) {
    event.preventDefault();

    let guessElement = document.getElementById("movie-guess");
    let guess = guessElement.value;
    let answer = movies[counter%(movies.length)].title;
    if(guess.toUpperCase() === answer.toUpperCase()){
        hint.innerHTML = `Yes! ${guess} was the correct answer! Try the next one!`;
        counter++;
    }
    else {
        lives--;
        hint.innerHTML = `No :(( ${guess} is not the correct answer! You have ${lives} guesses left...`;
        if(lives === 0){
            hint.innerHTML = `The answer was ${answer}... Maybe you'll get the next one!`;
            counter++;
        }
    }
    guessElement.value = '';
    displayExplanation();
}

function showHint() {
    hint.innerHTML = movies[counter%(movies.length)].hint;
}