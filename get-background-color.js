export const getBackgroundColor = function(element, property) {
  const style = window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
  const regex = style.includes("rgba") ? /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(\.\d+))\)$/ : /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  return style.match(regex).slice(1);
};