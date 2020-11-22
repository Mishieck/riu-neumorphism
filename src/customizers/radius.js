import { substringBetween as substr } from "../substring-between.js";

export const radius = param => substr(param.slice(param.indexOf("radius") + 7), ["", 0], [")", 0]).trim();