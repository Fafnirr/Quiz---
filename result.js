let scoreplace = document.getElementById('scoreFinal');

//cree un h2 contenant le score
let addScore = document.createElement('h2');
let GetfromStorageScore = sessionStorage.getItem('score');
addScore.textContent = " " + GetfromStorageScore;

scoreplace.appendChild(addScore);