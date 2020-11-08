import { substringBetween as substr } from "../substring-between.js";


export const shadows = param => {
  let shadows = [];

  if(param.includes("xs")) {
    shadows = [["2px", "4px", "0px"], ["2px", "4px", "0px"]];
  } else if(param.includes("sm")) {
    shadows = [["4px", "8px", "0px"], ["4px", "8px", "0px"]];
  } else if(param.includes("lg")) {
    shadows = [["10px", "20px", "0px"], ["10px", "20px", "0px"]];
  } else if(param.includes("xl")) {
    shadows = [["16px", "32px", "0px"], ["16px", "32px", "0px"]];
  }
  
  if(param.includes("xs")) {
    shadows = substr(param.slice(param.indexOf("shadows") + 8), ["", 0], [")", 0]).split(",").map(shadow => shadow.trim().split(/\s/));
  }
  
  return shadows;
}