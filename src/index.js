import Button from "./components/button/button";
import Image from "./components/image/image";
import Title from "./components/title/title";
import Warning from "./templates/warning.html";
import "./styles/warning.css";
import fraseTxt from "./files/frase.txt";
import descricao from "./files/descricao.json";
import Heading from "./components/heading/heading";
import sum from "./calc";
import $ from "jquery";

const title = new Title();
const image = new Image();
const button = new Button();
const heading = new Heading();

heading.create("Heading");
title.create("Primeira Página");
button.create();

const bodyJ = $("body");
const p = $("<p></p>").text("TEXTO EM JQUERY").css("color", "red");
bodyJ.append(p);

image.insertImage();

// Babel Spead
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let { a, b, ...teste } = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de HTML
const body = document.querySelector("body");
body.innerHTML += Warning;

// Import arquivo de texto;
const frase = fraseTxt;
body.innerHTML += frase.toUpperCase();

// Import JSON;
body.innerHTML += JSON.stringify(descricao);

console.log(VERSION);
console.log(PORT);
console.log(process.env.KEY);

const x = sum(1, 2);
const y = sum(10, 50);
const z = sum(100, 50);

console.log(x);
console.log(y);
console.log(z);
