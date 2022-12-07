﻿
fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
);

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

var jóVálasz;
var questionId = 4

function kérdésMegjelenítés(kérdés) {
    if (!kérdés) return;
    console.log(kérdés);
    document.getElementById("kérdés_szövege").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    jóVálasz = kérdés.correctAnswer;

    if (kérdés.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }

    //Jó és rossz kérdések jelölésének levétele
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
    
}

function válaszfeldolgozás(válasz) {
    if (!response.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        kérdésMegjelenítés(response.json())
    }
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(data => kérdésMegjelenítés(data));
}

function előre() {
    questionId++;
    kérdésBetöltés(questionId)
}

function vissza() {
    questionId--;
    kérdésBetöltés(questionId)
}

window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = előre;
    document.getElementById("vissza_gomb").onclick = vissza;
    kérdésBetöltés(questionId)
}

function választás(n) {
    if (n != jóVálasz) {
        document.getElementById(`válasz${n}`).classList.add("rossz");
        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
    }
    else {
        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
    }
}

