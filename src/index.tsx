import React, { ReactNode } from "react";
import AppVue from "./App.vue";
import { createApp } from "vue";
import router from "./routes";
import { createRoot } from "react-dom/client";
import App from "./App";
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
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "bootstrap";
import "./styles/bootstrap.scss";
import "./styles/styles.scss";

// Import Fonts
import "./styles/fonts.css";

// Import Icons
library.add(faAws);
library.add(faHouse);
dom.watch();

const title = new Title();
const image = new Image();
const button = new Button();
const heading = new Heading();

heading.create("Heading");
title.create("Primeira Página");
button.create();

const bodyJ = $("body");
const p = $("<p></p>").text("TEXTO EM JQUERY").css("color", "red");
const iconAws = $("<i></i>").addClass("fa-brands fa-aws");
const iconHouse = $("<i></i>").addClass("fa-solid fa-house");

const titleBulma = $("<h1></h1>")
  .addClass("title")
  .text("Aqui é um título com o Bulma");
const subTitleBulma = $("<p></p>")
  .addClass("subtitle")
  .text("Subtitle com o bulma! framework top!");

const div = $("<div></div>");
const primaryButton = $("<a></a>")
  .addClass("button is-primary")
  .text("Botão Bulma");
const linkBulma = $("<a></a>").addClass("button is-link").text("Link Bulma");
div.append(primaryButton);
div.append(linkBulma);
bodyJ.append(iconAws);
bodyJ.append(iconHouse);
bodyJ.append(p);
bodyJ.append(titleBulma);
bodyJ.append(subTitleBulma);
bodyJ.append(div);

const alert = $("<div></div>")
  .addClass("alert alert-primary")
  .text("Cuidado com isso!!");

bodyJ.append(alert);

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

// @ts-ignore
console.log(VERSION);
// @ts-ignore
console.log(PORT);
console.log(process.env.KEY);

const x: number = sum(1, 2);
const y: number = sum(10, 50);
const z: number = sum(100, 50);

console.log(x);
console.log(y);
console.log(z);

// React
const container = document.getElementById("root");
const root = createRoot(container);

// @ts-ignore
root.render((<App />) as ReactNode);

// Vue
const app = createApp(AppVue);

app.use(router);
app.mount("#app");
