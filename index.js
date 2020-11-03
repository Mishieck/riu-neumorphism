import { getBackgroundColor } from "./get-background-color.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";


const elements = document.querySelectorAll("[riu-neu]");

for(let len = elements.length; len--; ) {
  let rgb = new Uint8ClampedArray([0, 0, 0]);
  const options = attribute2options(elements[len].getAttribute("riu-neu"));

  if(options.collection) {
    rgb  = getBackgroundColor(elements[len], "background-color");
    console.info("collection");
    continue;
  }

  rgb  = getBackgroundColor(elements[len].parentNode, "background-color");
  setStyle(elements[len], rgb.map(component => parseFloat(component)), options);
}
