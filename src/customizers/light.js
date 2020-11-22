import { substringBetween as substr } from "../substring-between.js";


export const light = param => {
  return (
    param.includes("top-center") ? "top-center"
    : param.includes("top-right") ? "top-right"
    : param.includes("center-right") ? "center-right"
    : param.includes("bottom-right") ? "bottom-right"
    : param.includes("bottom-center") ? "bottom-center"
    : param.includes("bottom-left") ? "bottom-left"
    : param.includes("center-left") ? "center-left"
    : "top-left"
  );
}