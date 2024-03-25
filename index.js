let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let score = {
  home: 0,
  guest: 0,
}

function addScore(points, team) {
  score[team] += points;
  homeScore.textContent = score.home;
  guestScore.textContent = score.guest;
}

function reset() {
  score.home = 0;
  score.guest = 0;
  homeScore.textContent = score.home;
  guestScore.textContent = score.guest;
}



