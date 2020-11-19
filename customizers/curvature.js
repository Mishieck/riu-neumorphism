import { substringBetween as substr } from "../substring-between.js";


export const curvature = param => {
  let curvature  = ["flat", -135, 16];

  const angles = {
    "top-left": -135,
    "top-center": -90,
    "top-right": -45,
    "center-right": 0,
    "bottom-right": 45,
    "bottom-center": 90,
    "bottom-left": 135,
    "center-left": 180
  }

  const setCurvature = () => {
    const params = substr(param.slice(param.indexOf("curvature") + 10), ["", 0], [")", 0]).split(",");
    curvature[1] = angles[params[0].trim()];
    curvature[2] = parseFloat(params[1]);
  }

  if(param.includes("convex")) {
    curvature[0] = "convex";
    if(param.includes("curvature")) setCurvature();
  } else if(param.includes("concave")) {
    curvature[0] = "concave";
    if(param.includes("curvature")) setCurvature();
  }

  return curvature;
}