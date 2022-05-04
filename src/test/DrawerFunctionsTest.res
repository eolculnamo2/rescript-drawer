open Zora

zoraBlock("getStylesOrDefaults should return default styles if None is passed", t => {
  t->equal(DrawerFunctions.getStylesOrDefaults(None), DrawerFunctions.defaultStyles, "Should return default styles")
})

zoraBlock("getStylesOrDefaults should correctly map styles to return", t => {
  let param: DrawerSharedDefinitions.publicStyles  = {
    primary: "1" -> Some,
    secondary: "2" -> Some,
    fontColor: "3" -> Some,
    menuColor: "#dadada" -> Some,
  }
  let expectedResult: DrawerSharedDefinitions.internalStyles = {
    primary: "1",
    secondary: "2",
    fontColor: "3",
    menuColor: "#dadada",
  }
  let result = param -> Some -> DrawerFunctions.getStylesOrDefaults
  t->equal(result, expectedResult, "Should return mapped styles")
}) 

zoraBlock("getStylesOrDefaults should map the menuColor to the font color if not specified", t => {
    let param: DrawerSharedDefinitions.publicStyles  = {
    primary: "1" -> Some,
    secondary: "2" -> Some,
    fontColor: "3" -> Some,
    menuColor: None,
  }
  let result = param -> Some -> DrawerFunctions.getStylesOrDefaults
  t->equal(result.menuColor, param.fontColor -> Belt.Option.getExn, "Should return menuColor as fontColor when not provided")
})
