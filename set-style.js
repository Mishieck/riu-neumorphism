export const setStyle = (element, rgb, options) => {
  let lightSigns = ["-", "-"],
      darkSigns = ["", ""];

  const gradient = (curveAngle) => {
    return `linear-gradient(
      ${curveAngle}deg, 
      rgba(${rgb[0] + options.curvature[1]}, ${rgb[1] + options.curvature[1]}, ${rgb[2] + options.curvature[1]}, ${rgb[3] || 1}),
      rgba(${rgb[0] - options.curvature[1]}, ${rgb[1] - options.curvature[1]}, ${rgb[2] - options.curvature[1]}, ${rgb[3] || 1}))`;
  }
  
  element.style.borderRadius = options.radius;

  if(options.light === 45) {
    lightSigns = ["", ""];
    darkSigns = ["-", "-"];
  } else if(options.light === -45) {
    lightSigns[0] = "";
    darkSigns[0] = "-";
  } else if(options.light === 135) {
    lightSigns[1] = "";
    darkSigns[1] = "-";
  }

  const shadows = `
    ${lightSigns[0]}${options.shadows[0][0]}
    ${lightSigns[1]}${options.shadows[0][0]}
    ${options.shadows[0][1]}
    ${options.shadows[0][2]} 
    rgba(255, 255, 255, ${options.opacity[0]}) 
    ${options.shadowPosition},

    ${darkSigns[0]}${options.shadows[1][0]}
    ${darkSigns[1]}${options.shadows[1][0]}
    ${options.shadows[1][1]}
    ${options.shadows[1][2]} 
    rgba(0, 0, 0, ${options.opacity[1]}) 
    ${options.shadowPosition}`;

  element.style[options.boundary] = shadows;

  if(options.curvature[0] === "convex") {
    element.style.background = gradient(options.light - 90);
  } else if(options.curvature[0] === "concave") {
    element.style.background = gradient(options.light + 90);
  }
}