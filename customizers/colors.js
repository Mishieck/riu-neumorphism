import { substringBetween as substr } from "../substring-between.js";


export const colors = param => substr(param.slice(param.indexOf("colors") + 7), ["", 0], [")", 0]).split(",").map(color => color.trim().split(/\s/));