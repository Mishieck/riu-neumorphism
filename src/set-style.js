import { setProperty } from "./set-property.js";

export const setStyle = ({
  element,
  rgb,
  options: { radius, colors, lightSource, shadows, shadowPosition, curvature, boundary, opacities }
}) => {
  // Create gradient
  const gradient = (curveAngle) => {
    return `linear-gradient(
      ${curveAngle}deg, 
      rgba(${rgb[0] + curvature[2]}, ${rgb[1] + curvature[2]}, ${rgb[2] + curvature[2]}, ${rgb[3] || 1}),
      rgba(${rgb[0] - curvature[2]}, ${rgb[1] - curvature[2]}, ${rgb[2] - curvature[2]}, ${rgb[3] || 1})
    )`;
  };

  // Set border radius
  setProperty(element, "border-radius", radius);

  // Create X and Y offsets for light and dark shadows
  const offsets = {
    "top-left": {
      light: () => `-${shadows[0][0]} -${shadows[0][0]}`,
      dark: () => `${shadows[1][0]} ${shadows[1][0]}`
    },
    "top-center": {
      light: () => `0px -${shadows[0][0]}`,
      dark: () => `0px ${shadows[1][0]}`
    },
    "top-right": {
      light: () => `${shadows[0][0]} -${shadows[0][0]}`,
      dark: () => `-${shadows[1][0]} ${shadows[1][0]}`
    },
    "center-right": {
      light: () => `${shadows[0][0]} 0px`,
      dark: () => `-${shadows[1][0]} 0px`
    },
    "bottom-right": {
      light: () => `${shadows[0][0]} ${shadows[0][0]}`,
      dark: () => `-${shadows[1][0]} -${shadows[1][0]}`
    },
    "bottom-center": {
      light: () => `0px ${shadows[0][0]}`,
      dark: () => `0px -${shadows[1][0]}`
    },
    "bottom-left": {
      light: () => `-${shadows[0][0]} ${shadows[0][0]}`,
      dark: () => `${shadows[1][0]} -${shadows[1][0]}`
    },
    "center-left": {
      light: () => `-${shadows[0][0]} 0px`,
      dark: () => `${shadows[1][0]} 0px`
    }
  };

  // Create light shadow
  const lightShadow = `
    ${offsets[lightSource]["light"]()}
    ${shadows[0][1]}
    ${boundary === "box-shadow" ? shadows[0][2] : ""} 
    rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, ${opacities[0]}) 
    ${shadowPosition}`;

  // Create dark shadow
  const darkShadow = `
    ${offsets[lightSource]["dark"]()}
    ${shadows[1][1]}
    ${boundary === "box-shadow" ? shadows[1][2] : ""} 
    rgba(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]}, ${opacities[1]}) 
    ${shadowPosition}`;

  // Set shadow
  if (boundary === "drop-shadow")
    setProperty(element, "filter", `drop-shadow(${lightShadow}) drop-shadow(${darkShadow})`);
  else setProperty(element, boundary, `${lightShadow}, ${darkShadow}`);

  // Set curvature
  if (curvature[0] === "convex") setProperty(element, "background", gradient(curvature[1] - 90));
  else if (curvature[0] === "concave") setProperty(element, "background", gradient(curvature[1] + 90));
};
