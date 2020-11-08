import { substringBetween as substr } from "../substring-between.js";


export const light = param => {
  let light = "top-left";

  if (param.includes("top-center")) {
    light = "top-center";
  } else if (param.includes("top-right")) {
    light = "top-right";
  } else if (param.includes("center-right")) {
    light = "center-right";
  } else if (param.includes("bottom-right")) {
    light = "bottom-right";
  } else if(param.includes("bottom-center")) {
    light = "bottom-center";
  } else if(param.includes("bottom-left")) {
    light = "bottom-left";
  } else if(param.includes("center-left")) {
    light = "center-left";
  }

  return light;
}