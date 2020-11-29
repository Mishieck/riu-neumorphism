import { substringBetween as substr } from "../substring-between.js";


export const colors = (attribute, rgb) => {
  if(attribute.includes("colors")) {
    return substr(attribute.slice(attribute.indexOf("colors") + 7), ["", 0], [")", 0]).split(",").map(color => color.trim().split(/\s/));
  }

  let colors = [rgb.slice(0, 3), rgb.slice(0, 3)],
      shift = [(255 - rgb[0]) + (255 - rgb[1]) + (255 - rgb[2]), rgb[0] + rgb[1] + rgb[2]],
      minShift = 72;

  if(shift[0] < minShift) minShift = shift[0];
  if(shift[1] < minShift) minShift = shift[1];
  shift = [minShift, minShift];
  let j = 72;
  
  // Adjust colors using remainders
  while(j--) {
    // Adjust light color
    if(shift[0]) {
      for(let k = 0; k < 3; k++) {
        if(colors[0][k] < 255 && shift[0]) {
          colors[0][k] += 1;
          shift[0]--;
        }
      }
    }
    
    // Adjust dark color
    if(shift[1]) {
      for(let k = 0; k < 3; k++) {
        if(colors[1][k] > 0 && shift[1]) {
          colors[1][k] -= 1;
          shift[1]--;
        }
      }
    }

    if(!shift[0] && !shift[1]) break;
  }

  return colors;
}