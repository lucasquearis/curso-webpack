import "./heading.css";

class Heading {
  create(title: string) {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    h1.classList.add("title-heading");
    document.querySelector("body").appendChild(h1);
  }
}

export default Heading;
