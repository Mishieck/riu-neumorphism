import { substringBetween as substr } from "./substring-between.js";


export const attribute2options = (attribute) => {
  let radius = "8px", light = "top-left", shadowPosition = "", curvature = "flat", size = 6, boundary = "boxShadow";

  if(attribute.includes("radius")) {
    radius = substr(attribute.slice(attribute.indexOf("radius") + 8), ["", 0], [")", 0]);
  }

  if (attribute.includes("top-right")) {
    light = "top-right";
  } else if(attribute.includes("bottom-right")) {
    light = "bottom-right";
  } else if(attribute.includes("bottom-left")) {
    light = "bottom-left";
  }

  if(attribute.includes("inner")) {
    shadow = "inset";
  }

  if(attribute.includes("convex")) {
    curvature = "convex";
  } else if(attribute.includes("concave")) {
    curvature = "concave";
  }

  if(attribute.includes("xs")) {
    size = 2;
  } else if(attribute.includes("sm")) {
    size = 4;
  } else if(attribute.includes("lg")) {
    size = 10;
  } else if(attribute.includes("xl")) {
    size = 16;
  }

  if(attribute.includes("drop")) {
    boundary = "dropShadow";
  }

  return {
    collection: attribute.includes("collection"),
    radius,
    light,
    shadowPosition,
    curvature,
    size,
    boundary
  }
}