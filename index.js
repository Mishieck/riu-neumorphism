import { getStyle } from "./get-style.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";


const elements = document.querySelectorAll("[riu-neu]");

for(let len = elements.length; len--; ) {
  let rgb = new Uint8ClampedArray([0, 0, 0]);

  const options = attribute2options(elements[len].getAttribute("riu-neu"));
  console.info(options);

  if(options.collection) {
    rgb  = getStyle(elements[len], "background-color")
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1);
    console.info("collection");
    continue;
  }

  rgb  = getStyle(elements[len].parentNode, "background-color")
  .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1);

  setStyle(elements[len], rgb, options);
}
