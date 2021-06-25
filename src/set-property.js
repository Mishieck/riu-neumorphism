export const setProperty = (element, property, value) => {
  if (property in element.style) element.style.setProperty(property, value, "");
  else {
    const vendorPrefixes = ["-webkit-", "-moz-", "-o-", "-ms-"];

    for (let i = 4; i--; ) {
      property = vendorPrefixes[i] + property;

      if (property in element.style) {
        element.style.setProperty(property, value, "");
        break;
      }
    }
  }
};
