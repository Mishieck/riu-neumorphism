import { substringBetween as substr } from "./substring-between.js";


export const attribute2options = (attribute, rgb) => {
  let averageRGB = rgb.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
  console.info(averageRGB);
  let radius = "8px",
  light = -135,
  shadowPosition = "",
  curvature = ["flat", 16],
  boundary = "boxShadow",
  shadows = [["9px", "18px", "0px"], ["6px", "12px", "0px"]],
  opacity = [averageRGB / 255 * 0.4, 255 / averageRGB * 0.10];

  if(attribute.includes("radius")) {
    radius = substr(attribute.slice(attribute.indexOf("radius") + 7), ["", 0], [")", 0]);
  }

  if (attribute.includes("top-right")) {
    light = -45;
  } else if(attribute.includes("bottom-right")) {
    light = 45;
  } else if(attribute.includes("bottom-left")) {
    light = 135;
  }

  if(attribute.includes("inner")) {
    shadowPosition = "inset";
  }

  if(attribute.includes("convex")) {
    curvature = ["convex", 16];

    if(attribute.includes("curvature")) {
      curvature[1] = parseFloat(substr(attribute.slice(attribute.indexOf("curvature") + 10), ["", 0], [")", 0]));
    }
  } else if(attribute.includes("concave")) {
    curvature = ["concave", 16];

    if(attribute.includes("curvature")) {
      curvature[1] = parseFloat(substr(attribute.slice(attribute.indexOf("curvature") + 10), ["", 0], [")", 0]));
    }
  }

  if(attribute.includes("xs")) {
    shadows = [["3px", "6px", "0px"], ["2px", "4px", "0px"]];
  } else if(attribute.includes("sm")) {
    shadows = [["6px", "12px", "0px"], ["4px", "8px", "0px"]];
  } else if(attribute.includes("lg")) {
    shadows = [["15px", "30px", "0px"], ["10px", "20px", "0px"]];
  } else if(attribute.includes("xl")) {
    shadows = [["24px", "48px", "0px"], ["16px", "32px", "0px"]];
  }

  if(attribute.includes("shadows")) {
    shadows = substr(attribute.slice(attribute.indexOf("shadows") + 8), ["", 0], [")", 0])
      .split(",")
      .map(shadow => shadow.trim().split(/\s/));
  }

  if(attribute.includes("drop")) {
    boundary = "dropShadow";
  }

  if(attribute.includes("opacity")) {
    opacity = substr(attribute.slice(attribute.indexOf("opacity") + 8), ["", 0], [")", 0]).split(",");
  }

  return {
    collection: attribute.includes("collection"),
    radius,
    light,
    shadows,
    shadowPosition,
    curvature,
    boundary,
    opacity
  }
}