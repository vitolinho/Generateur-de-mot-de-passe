// DOM
const pwText = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const pwLen = document.getElementById('len');
const pwMaj = document.getElementById('maj');
const pwMin = document.getElementById('min');
const pwChiffre = document.getElementById('chiffre');
const pwSpeciaux = document.getElementById('speciaux');
const genBtn = document.getElementById('genBtn');

// variables
const min = "abcdefghijklmnopqrstuvwxyz"

const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const chiffres = "012456789"

const specials = "[]{}#()*;._-!"

// Get element fonctions
function getMin()
{
    return min[Math.floor(Math.random() * min.length)];
}

function getMaj()
{
    return maj[Math.floor(Math.random() * maj.length)];
}

function getChiffre()
{
    return chiffres[Math.floor(Math.random() * chiffres.length)];
}

function getSpecial()
{
    return specials[Math.floor(Math.random() * specials.length)];
}

// Tableau avec des element récupérer par rapport ce qu'on a coché
function genererElement() {
    const tableElements = [];
    if (pwMaj.checked) {
        tableElements.push(getMaj());
    }

    if (pwMin.checked) {
        tableElements.push(getMin());
    }

    if (pwChiffre.checked) {
        tableElements.push(getChiffre());
    }

    if (pwSpeciaux.checked) {
        tableElements.push(getSpecial());
    }

    if (tableElements.length === 0) return "";

    return tableElements[Math.floor(Math.random() * tableElements.length)];
}

function genererMdp() {
    const lenMdp = pwLen.value;

    let mdp = "";

    if (pwMaj.checked) {
        mdp += getMaj();
    }

    if (pwMin.checked) {
        mdp += getMin();
    }

    if (pwChiffre.checked) {
        mdp += getChiffre();
    }

    if (pwSpeciaux.checked) {
        mdp += getSpecial();
    }

    for (let i = mdp.length; i < lenMdp; i++) {
        const x = genererElement();
        mdp += x;
    }

    pwText.value = mdp;
}

genBtn.addEventListener('click', genererMdp);

function Copier() {
    pwText.select();
    document.execCommand("Copy");
    alert("Mot de passe copié dans le presse-papier !");
}

copyBtn.addEventListener('click', Copier);