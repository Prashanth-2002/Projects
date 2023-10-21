const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.querySelector('.new-joke-btn');
const tweetBtn = document.querySelector('.tweet-btn');

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        jokeText.innerText = data.joke;
      })
      .catch(error => {
        jokeText.innerText = 'Oops! Some error happened :(';
        console.error(error);
      });
  }

  newJokeBtn.addEventListener('click', getJoke);


getJoke();
