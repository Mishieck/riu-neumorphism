import { rgb2hex } from "./rgb2hex.js";
import { substringBetween as substr } from "./substring-between.js";


let getStyle = function(element, property) {
  return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
};

const attribute2options = (attribute) => {
  let radius = "8px", light = "top-left", shadowPosition = "", curvature = "flat", size = 6, boundary = "boxShadow";

  if(attribute.includes("radius")) {
    radius = substr(attribute.slice(attribute.indexOf("radius") + 8), ["", 0], [")", 0]);
  }

  if (attribute.includes("top-right")) {
    light = "top-right";
  } else if(attribute.includes("bottom-right")) {
    light = "bottom-right";
  } else if(attribute.includes("bottom-left")) {
    light = "bottom-left";
  }

  if(attribute.includes("inner")) {
    shadow = "inset";
  }

  if(attribute.includes("convex")) {
    curvature = "convex";
  } else if(attribute.includes("concave")) {
    curvature = "concave";
  }

  if(attribute.includes("xs")) {
    size = 2;
  } else if(attribute.includes("sm")) {
    size = 4;
  } else if(attribute.includes("lg")) {
    size = 10;
  } else if(attribute.includes("xl")) {
    size = 16;
  }

  if(attribute.includes("drop")) {
    boundary = "dropShadow";
  }

  return {
    collection: attribute.includes("collection"),
    radius,
    light,
    shadowPosition,
    curvature,
    size,
    boundary
  }
}

const setStyle = (element, rgb, options) => {
  element.style.borderRadius = options.radius;
  
  const style = `
    ${options.size}px 
    ${options.size}px 
    ${options.size * 2}px 
    0px 
    rgba(0, 0, 0, 0.15) 
    ${options.shadowPosition},
    -${options.size * 1.5}px 
    -${options.size * 1.5}px 
    ${options.size * 3}px 
    0px 
    rgba(255, 255, 255, 0.4) 
    ${options.shadowPosition}`;

  console.info(style);

  element.style[options.boundary] = style;
}

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
