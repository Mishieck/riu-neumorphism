export const setStyle = ({
  element,
  rgb,
  options: {
    collection,
    radius,
    colors,
    light,
    shadows,
    shadowPosition,
    curvature,
    boundary,
    opacity
  }
}) => {
  const gradient = (curveAngle) => {
    return `linear-gradient(
      ${curveAngle}deg, 
      rgba(${rgb[0] + curvature[2]}, ${rgb[1] + curvature[2]}, ${rgb[2] + curvature[2]}, ${rgb[3] || 1}),
      rgba(${rgb[0] - curvature[2]}, ${rgb[1] - curvature[2]}, ${rgb[2] - curvature[2]}, ${rgb[3] || 1}))`;
  }
  
  element.style.borderRadius = radius;

  const offsets = {
    "top-left": {
      light: `-${shadows[0][0]} -${shadows[0][0]}`,
      dark: `${shadows[1][0]} ${shadows[1][0]}`
    },
    "top-center": {
      light: `0px -${shadows[0][0]}`,
      dark: `0px ${shadows[1][0]}`
    },
    "top-right": {
      light: `${shadows[0][0]} -${shadows[0][0]}`,
      dark: `-${shadows[1][0]} ${shadows[1][0]}`
    },
    "center-right": {
      light: `${shadows[0][0]} 0px`,
      dark: `-${shadows[1][0]} 0px`
    },
    "bottom-right": {
      light: `${shadows[0][0]} ${shadows[0][0]}`,
      dark: `-${shadows[1][0]} -${shadows[1][0]}`
    },
    "bottom-center": {
      light: `0px ${shadows[0][0]}`,
      dark: `0px -${shadows[1][0]}`
    },
    "bottom-left": {
      light: `-${shadows[0][0]} ${shadows[0][0]}`,
      dark: `${shadows[1][0]} -${shadows[1][0]}`
    },
    "center-left": {
      light: `-${shadows[0][0]} 0px`,
      dark: `${shadows[1][0]} 0px`
    }
  }

  const mainStyle = `
    ${offsets[light]["light"]}
    ${shadows[0][1]}
    ${shadows[0][2]} 
    rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, ${opacity[0]}) 
    ${shadowPosition},

    ${offsets[light]["dark"]}
    ${shadows[1][1]}
    ${shadows[1][2]} 
    rgba(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]}, ${opacity[1]}) 
    ${shadowPosition}`;

  element.style[boundary] = mainStyle;

  if(curvature[0] === "convex") {
    element.style.background = gradient(curvature[1] - 90);
  } else if(curvature[0] === "concave") {
    element.style.background = gradient(curvature[1] + 90);
  }
}