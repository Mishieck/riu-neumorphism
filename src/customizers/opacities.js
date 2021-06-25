import { substringBetween as substr } from "../substring-between.js";

export const opacities = (param) => {
  return substr(param.slice(param.indexOf("opacities") + 10), ["", 0], [")", 0])
    .split(",")
    .map((op) => op.trim());
};
