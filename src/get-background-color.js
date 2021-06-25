export const getBackgroundColor = (element) => {
  const style = window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue("background-color")
    : element.style.backgroundColor;

  const color = style
    .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
    .slice(1, 5)
    .map((value) => parseFloat(value));
  const colorNotSet =
    (color[0] === 0 && color[1] === 0 && color[2] === 0) || (color[0] === 255 && color[1] === 255 && color[2] === 255);
  // If color is not set, look for closest ancestor whose color was set explicitly
  if (colorNotSet) {
    if (element.tagName === "BODY") return console.error(`Background color not set or is out of range!`), [];
    else if (element.hasAttribute("riu-neu"))
      console.warn(`Background color of neumorphic element is either not set or is out of range!`);
    return getBackgroundColor(element.parentElement);
  }

  return color;
};
