import { getBackgroundColor } from "./get-background-color.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";


const elements = document.querySelectorAll("[riu-neu]");

for(let len = elements.length; len--; ) {
  let rgb = new Uint8ClampedArray([0, 0, 0]);

  if(elements[len].getAttribute("riu-neu").includes("collection")) {
    rgb  = getBackgroundColor(elements[len], "background-color");
    console.info("collection");
    continue;
  }

  rgb  = getBackgroundColor(elements[len].parentNode, "background-color");
  rgb = rgb.map(component => parseFloat(component));
  const options = attribute2options(elements[len].getAttribute("riu-neu"), rgb);
  setStyle(elements[len], rgb, options);
}
