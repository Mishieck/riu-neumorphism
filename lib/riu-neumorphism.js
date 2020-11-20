import { getBackgroundColor } from "./get-background-color.js";
import { attribute2options } from "./attribute2options.js";
import { setStyle } from "./set-style.js";
import { observeDOMMutations } from "./observe-dom-mutations.js";


const riuNeumorphism = () => {
  window.addEventListener("load", e => {
    const riuNeuElements = document.querySelectorAll("[riu-neu]");
    for(const element of riuNeuElements) style(element);
    
    if(observeDOMMutations) {
      observeNodeInsertion(document.getElementsByTagName("body")[0]);
    
      for(const element of riuNeuElements) {
        observeAttributeChanges(element);
        if(element.getAttribute("riu-neu").includes("collection")) observeColorChanges(element);
        else observeColorChanges(element.parentNode);
      }
    }
  });
}

const style = element => {
  const attribute = element.getAttribute("riu-neu"),
        isCollection = attribute.includes("collection"),
        rgb  = getBackgroundColor(isCollection ? element : element.parentNode, "background-color");

  if(!rgb[0]) return;
  const options = attribute2options(attribute, rgb);
  
  if(isCollection) {
    const children = element.children;
    for(const child of children) setStyle({ element: child, rgb, options });
    return;
  }

  setStyle({ element, rgb, options });
}

const observeNodeInsertion = element => {
  observeDOMMutations(
    element,
    mutations => {
      for(const mutation of mutations) {
        for(const node of mutation.addedNodes) {
          if(node.hasAttribute("riu-neu")) style(node); 
          else if(node.parentNode.hasAttribute("riu-neu")) style(node.parentNode);
        }
      }
    },
    { childList: true, subtree: true }
  );
}

const observeAttributeChanges = element => {
  observeDOMMutations(
    element,
    mutations => { for(const mutation of mutations) style(mutation.target); },
    { attributes: true, attributeFilter: ["riu-neu"] }
  );
}

const observeColorChanges = element => {
  observeDOMMutations(
    element,
    mutations => {
      for(const mutation of mutations) {
        if(mutation.target.hasAttribute("riu-neu")) style(mutation.target);
        else for(const child of mutation.target.children) style(child);
      }
    },
    { attributes: true, attributeFilter: ["style"] }
  );
}

if(typeof exports === "undefined") riuNeumorphism();
else exports.riuNeumorphism = riuNeumorphism;
