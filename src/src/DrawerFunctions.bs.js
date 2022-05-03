// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Option from "rescript/lib/es6/belt_Option.js";

var defaultStyles = {
  primary: "#333",
  secondary: "#333",
  fontColor: "#fff",
  menuColor: "#fff"
};

function getStylesOrDefaults(publicStyles) {
  if (publicStyles !== undefined) {
    return {
            primary: Belt_Option.getWithDefault(publicStyles.primary, "#333"),
            secondary: Belt_Option.getWithDefault(publicStyles.secondary, "#333"),
            fontColor: Belt_Option.getWithDefault(publicStyles.fontColor, "#fff"),
            menuColor: Belt_Option.getWithDefault(publicStyles.menuColor, Belt_Option.getWithDefault(publicStyles.fontColor, "#fff"))
          };
  } else {
    return defaultStyles;
  }
}

export {
  defaultStyles ,
  getStylesOrDefaults ,
  
}
/* No side effect */