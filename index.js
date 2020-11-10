import { getBackgroundColor } from "./get-background-color.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";


const elements = document.querySelectorAll("[riu-neu]");

for(let len = elements.length; len--; ) {
  let rgb = new Uint8ClampedArray([0, 0, 0]);
  const attribute = elements[len].getAttribute("riu-neu");
  const isCollection = attribute.includes("collection");
  rgb  = getBackgroundColor(!isCollection ? elements[len].parentNode : elements[len], "background-color");
  rgb = rgb.map(component => parseFloat(component));
  const options = attribute2options(attribute, rgb);

  if(isCollection) {
    console.info(elements[len].style);
    let children = elements[len].children;

    for(let l = children.length; l--; ) {
      setStyle({ element: children[l], rgb, options });
    }
    continue;
  }

  setStyle({ element: elements[len], rgb, options });
}
