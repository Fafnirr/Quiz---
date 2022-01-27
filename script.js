//Tableau avec les questions
let myQuestions = [
    {
        question: "Dans le premier épisode, que part vendre Tanjiro en ville ?",
        reponse: [
            "Du bois",
            "Du granit",
            "Du charbon",
            "Du blé "
        ],
        correctAnswer: "Du charbon"
    },
    {
        question: "Selon Giyu, où vit Urokodaki Sakonji ?",
        reponse: [
            "En haut de la montagne Sopori",
            "Dans les monts Sawari",
            "Dans la plaine de Sakonji",
            "Au pied du Mont Sagiri "
        ],
        correctAnswer: "Au pied du Mont Sagiri "
    },
    {
        question: "Comment s'appellent les deux orphelins adoptés par Sakonji ?",
        reponse: [
            "Makomo et Sabito",
            "Matsumoto et Reiji",
            "Mitsuki et Ari",
            "Masenko et Kochi",
        ],
        correctAnswer: "Makomo et Sabito"
    },
    {
        question: "Comment s'appelle le forgeron du katana de Tanjiro ?",
        reponse: [
            "Aruhiko",
            "Hitemabashi",
            "Mamoru",
            "Haganezuka",
        ],
        correctAnswer: "Haganezuka"
    },
    {
        question: "Comment s'appelle l'épouse de Muzan ?",
        reponse: [
            "Ayana",
            "Tsukihiko",
            "Chiharu",
            "Kazuko",
        ],
        correctAnswer: "Tsukihiko"
    },
    {
        question: "Kyôgai est le nom de quel démon ?",
        reponse: [
            "Le démon au corps d'araignée",
            "Le démon tambour",
            "Le démon Micheal Jackson",
            "Le démon a tête d'araignée",
        ],
        correctAnswer: "Le démon tambour"
    },
    {
        question: "Dans quel Mont Tanjiro fait-il face aux démons araignées ?",
        reponse: [
            "Au Mont Warusawa",
            "Au Mont Kitahotaka",
            "Au Mont Okuhotaka",
            "Au Mont Natagumo",
        ],
        correctAnswer: "Au Mont Kitahotaka"
    },
    {
        question: "Quel pilier teste la résistance de Nezuko à la vue du sang en se blessant volontairement dans l'épisode 23 ?",
        reponse: [
            "Tokito",
            "Shinobu",
            "Tengen",
            "Sanemi",
        ],
        correctAnswer: "Sanemi"
    },
    {
        question: "Qu'a promis Sakonji si jamais Nezuko venait à tuer un humain ?",
        reponse: [
            "De s'immoler par le feu",
            "Que lui, Giyu et Tanjiro s'ouvrent le ventre",
            "Que Tanjiro tue Nezuko",
            "Q'ils renoncent tout les trois à leurs pouvoirs ",
        ],
        correctAnswer: "Que lui, Giyu et Tanjiro s'ouvrent le ventre"
    },
    {
        question: "Lors du dernier épisode de la saison 1, Muzan tue 6 lunes démoniaques. Laquelle épargne-t-il ?",
        reponse: [
            "La numéro 1",
            "La numéro 4",
            "La numéro 7",
            "La numéro 10",
        ],
        correctAnswer: "La numéro 10"
    }
]

//Score = rep juste
let score = 0;

let counter = 1;

// i = les différents tableaux
let i = 0;

let theQuestion = document.querySelector('#question');

let reponseA = document.querySelector('#a');
let reponseB = document.querySelector('#b');
let reponseC = document.querySelector('#c');
let reponseD = document.querySelector('#d');

let form = document.querySelector('#question-form');

//permet d'afficher les questions et reponse sur le html 
function setQuestion() {
    theQuestion.textContent = myQuestions[i].question;
    reponseA.textContent = myQuestions[i].reponse[0];
    reponseA.setAttribute('value', myQuestions[i].reponse[0]);
    reponseA.setAttribute('value', myQuestions[i].reponse[0]);

    reponseB.textContent = myQuestions[i].reponse[1];
    reponseB.setAttribute('value', myQuestions[i].reponse[1]);
    reponseB.setAttribute('value', myQuestions[i].reponse[1]);

    reponseC.textContent = myQuestions[i].reponse[2];
    reponseC.setAttribute('value', myQuestions[i].reponse[2]);
    reponseC.setAttribute('value', myQuestions[i].reponse[2]);

    reponseD.textContent = myQuestions[i].reponse[3];
    reponseD.setAttribute('value', myQuestions[i].reponse[3]);
    reponseD.setAttribute('value', myQuestions[i].reponse[3]);

    // Permet d'afficher le score dans le head
    let juste = document.querySelector(".repJuste");
    juste.innerHTML = 'score : ' + score;
    sessionStorage.setItem('score', juste);
}
    setQuestion();


let SelectedA = document.querySelectorAll('.option');
let UserAnswer = [];
let SelectedAnswer;

for (let j = 0; j < SelectedA.length; j++) {
    SelectedA[j].onclick = function (event) {
        let Response = event.target.value;
        UserAnswer.push(Response);
    }
}

//change les question et le Score
form.addEventListener('click', function () {
    SelectedAnswer = UserAnswer.at(-1);
    if (counter <= myQuestions.length) {
        counter++;
        if (SelectedAnswer == myQuestions[i].correctAnswer) {
            score++;
            i++;
            if (i != myQuestions.length) {
                setQuestion();
            }
        } else if (SelectedAnswer != myQuestions[i].correctAnswer){
            i++;
            if (i != myQuestions.length) {
                setQuestion();
            }
        } else {
            if (i != myQuestions.length) {
                setQuestion();
            }
            console.log(myQuestions[i].question);
        }
        console.log(i);
        if (i == myQuestions.length) {
            let addButton = document.createElement('a');
            let lien = document.createTextNode("Resultat");
            sessionStorage.setItem('score', score);
            addButton.href = 'result.html';
            addButton.setAttribute('class', 'btn btn-danger');
            addButton.appendChild(lien);
            resultatFinal.appendChild(addButton);
        }
    }
    // Permet d'afficher le score dans le head
    let juste = document.querySelector(".repJuste");
    juste.innerHTML = 'score : ' + score;
    console.log(score);
})

