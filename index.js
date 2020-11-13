import { getBackgroundColor } from "./get-background-color.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";
import { observeDOMMutations } from "./observe-dom-mutations.js";


window.addEventListener("load", () => {
  const elements = document.querySelectorAll("[riu-neu]");

  for(const element of elements) {
    style(element);
  }
  
  if(observeDOMMutations) {
    observeDOMMutations(
      document.getElementsByTagName("body")[0],
      mutations => {
        for(const mutation of mutations) {
          if(mutation.type === "childList") {
            for(const node of mutation.addedNodes) {
              if(node.hasAttribute("riu-neu")) {
                style(node);
              } else if(node.parentNode.hasAttribute("riu-neu")) {
                style(node.parentNode);
              }
            }
          }
        }
      },
      { childList: true, subtree: true }
    );
    
    let riuNeuElements = document.querySelectorAll("[riu-neu]");
  
    for(const element of riuNeuElements) {
      observeDOMMutations(
        element,
        mutations => {
          for(const mutation of mutations) {
            console.info(mutation.target);
            style(mutation.target);
          }
        },
        { attributes: true, attributeFilter: ["riu-neu"] }
      );
  
      if(element.getAttribute("riu-neu").includes("collection")) {
        observeColorMutation(element);
      } else {
        observeColorMutation(element.parentNode);
      }
    }
  }
});

const style = element => {
  let rgb = new Uint8ClampedArray([0, 0, 0]);
  const attribute = element.getAttribute("riu-neu");
  const isCollection = attribute.includes("collection");
  rgb  = getBackgroundColor(!isCollection ? element.parentNode : element, "background-color");
  rgb = rgb.map(component => parseFloat(component));
  const options = attribute2options(attribute, rgb);

  if(isCollection) {
    let children = element.children;

    for(let l = children.length; l--; ) {
      setStyle({ element: children[l], rgb, options });
    }

    return;
  }

  setStyle({ element, rgb, options });
}


const observeColorMutation = element => {
  observeDOMMutations(
    element,
    mutations => {
      for(const mutation of mutations) {
        console.info("color changed");
        if(mutation.target.hasAttribute("riu-neu")) {
          console.info("on collection");
          style(mutation.target);
        } else {
          for(const child of mutation.target.children) {
            console.info("on parent");
            style(child);
          }
        }
      }
    },
    { attributes: true, attributeFilter: ["style"] }
  );
}
