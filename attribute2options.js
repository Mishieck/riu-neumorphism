import { radius as getRadius } from "./customizers/radius.js";
import { light as getLight } from "./customizers/light.js";
import { colors as getColors } from "./customizers/colors.js";
import { shadows as getShadows } from "./customizers/shadows.js";
import { curvature as getCurvature } from "./customizers/curvature.js";
import { opacity as getOpacity } from "./customizers/opacity.js";


export const attribute2options = (attribute, rgb) => {
  return {
    collection: attribute.includes("collection"),
    radius: attribute.includes("radius") ? getRadius(attribute) : "8px",
    colors: attribute.includes("colors") ? getColors(attribute) : [[rgb[0] + 16, rgb[1] + 16, rgb[2] + 16], [rgb[0] - 16, rgb[1] - 16, rgb[2] - 16]],
    lightSource: getLight(attribute),
    shadows: getShadows(attribute),
    shadowPosition: attribute.includes("inner") ? "inset" : "",
    curvature: getCurvature(attribute),
    boundary: attribute.includes("drop") ? "drop-shadow" : (attribute.includes("text") ? "text-shadow" : "box-shadow"),
    opacity: attribute.includes("opacity") ? getOpacity(attribute) : [0.8, 1]
  }
}