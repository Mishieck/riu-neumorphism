import { substringBetween as substr } from "./substring-between.js";
import { radius as getRadius } from "./customizers/radius.js";
import { light as getLight } from "./customizers/light.js";
import { colors as getColors } from "./customizers/colors.js";
import { shadows as getShadows } from "./customizers/shadows.js";
import { curvature as getCurvature } from "./customizers/curvature.js";
import { opacity as getOpacity } from "./customizers/opacity.js";


export const attribute2options = (attribute, rgb) => {
  let averageRGB = rgb.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
  console.info(averageRGB);
  let shadowPosition = "",
  boundary = "boxShadow";

  const radius = attribute.includes("radius") ? getRadius(attribute) : "8px";
  const light = getLight(attribute);
  const colors = attribute.includes("colors") ? getColors(attribute) : [[rgb[0] + 16, rgb[1] + 16, rgb[2] + 16], [rgb[0] - 16, rgb[1] - 16, rgb[2] - 16]];
  const shadows = attribute.includes("shadows") ? getShadows(attribute) : [["6px", "12px", "0px"], ["6px", "12px", "0px"]];
  const curvature = getCurvature(attribute);
  const opacity = attribute.includes("opacity") ? getOpacity(attribute) : [1, 1];

  if(attribute.includes("inner")) {
    shadowPosition = "inset";
  }

  if(attribute.includes("drop")) {
    boundary = "dropShadow";
  }

  return {
    collection: attribute.includes("collection"),
    radius,
    colors,
    light,
    shadows,
    shadowPosition,
    curvature,
    boundary,
    opacity
  }
}