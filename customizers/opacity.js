import { substringBetween as substr } from "../substring-between.js";


export const opacity = param => substr(param.slice(param.indexOf("opacity") + 8), ["", 0], [")", 0]).split(",").map(op => op.trim());