export const setStyle = (element, rgb, options) => {
  element.style.borderRadius = options.radius;
  const lightSign = options.shadowPosition === "inset" ? "" : "-";
  const darkSign = options.shadowPosition === "inset" ? "-" : "";

  const style = `
    ${darkSign}${options.size}px 
    ${darkSign}${options.size}px 
    ${options.size * 2}px 
    0px 
    rgba(0, 0, 0, 0.15) 
    ${options.shadowPosition},
    ${lightSign}${options.size * 1.5}px 
    ${lightSign}${options.size * 1.5}px 
    ${options.size * 3}px 
    0px 
    rgba(255, 255, 255, 0.4) 
    ${options.shadowPosition}`;

  console.info(style);

  element.style[options.boundary] = style;
}