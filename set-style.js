export const setStyle = (element, rgb, options) => {
  let lightSigns = ["-", "-"],
      darkSigns = ["", ""];

  const gradient = (curveAngle) => {
    return `linear-gradient(
      ${curveAngle}deg, 
      rgba(${rgb[0] + 16}, ${rgb[1] + 16}, ${rgb[2] + 16}, ${rgb[3] || 1}),
      rgba(${rgb[0] - 16}, ${rgb[1] - 16}, ${rgb[2] - 16}, ${rgb[3] || 1}))`;
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

  const style = `
    ${lightSigns[0]}${options.size * 1.5}px 
    ${lightSigns[1]}${options.size * 1.5}px 
    ${options.size * 3}px 
    0px 
    rgba(255, 255, 255, 0.4) 
    ${options.shadowPosition},

    ${darkSigns[0]}${options.size}px 
    ${darkSigns[1]}${options.size}px 
    ${options.size * 2}px 
    0px 
    rgba(0, 0, 0, 0.15) 
    ${options.shadowPosition}`;

  element.style[options.boundary] = style;

  if(options.curvature === "convex") {
    element.style.background = gradient(options.light - 90);
  } else if(options.curvature === "concave") {
    element.style.background = gradient(options.light + 90);
  }
}