import { substringBetween as substr } from "../substring-between.js";


export const shadows = param => {
  return param.includes("xs") ? [["2px", "4px", "0px"], ["2px", "4px", "0px"]]
        : param.includes("sm") ? [["4px", "8px", "0px"], ["4px", "8px", "0px"]]
        : param.includes("lg") ? [["10px", "20px", "0px"], ["10px", "20px", "0px"]]
        : param.includes("xl") ? [["16px", "32px", "0px"], ["16px", "32px", "0px"]]
        : param.includes("shadows") ? substr(param.slice(param.indexOf("shadows") + 8), ["", 0], [")", 0])
          .split(",").map(shadow => shadow.trim().split(/\s/))
        : [["6px", "12px", "0px"], ["6px", "12px", "0px"]];
}