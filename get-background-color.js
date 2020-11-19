export const getBackgroundColor = (element, property) => {
  const style = window.getComputedStyle
        ? window.getComputedStyle(element, null).getPropertyValue(property)
        : element.style[property.replace(/-([a-z])/g, g => g[1].toUpperCase())];

  const color = style.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/).slice(1, 5).map(value => parseFloat(value));
  
  if(color[0] === 0 && color[1] === 0 && color[2] === 0) {
    console.error(`Background color not set on ${element.hasAttribute("riu-neu") ? "collection" : "parent element"}!`);
    return [];
  }

  return color;
};