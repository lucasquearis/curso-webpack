import image from "../../img/ESP32.jpg";

class Image {
  insertImage() {
    const img = document.createElement("img");

    img.src = image;

    document.querySelector("body").appendChild(img);
  }
}

export default Image;
