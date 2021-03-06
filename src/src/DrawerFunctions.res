@send
external contains: (Js.Nullable.t<Dom.element>, Dom.element) => bool = "contains"

let defaultStyles: DrawerSharedDefinitions.internalStyles = {
  primary: "#333",
  secondary: "#333",
  fontColor: "#fff",
  menuColor: "#fff",
}

type getStylesOrDefaultsType = (option<DrawerSharedDefinitions.publicStyles>) => DrawerSharedDefinitions.internalStyles
let getStylesOrDefaults: getStylesOrDefaultsType = (publicStyles) => {
  open Belt.Option
  switch publicStyles {
  | Some(p) => ({
    primary: p.primary -> getWithDefault(defaultStyles.primary),
    secondary: p.secondary -> getWithDefault(defaultStyles.secondary),
    fontColor: p.fontColor -> getWithDefault(defaultStyles.fontColor),
    // try to make it match font if menu isn't provided
    menuColor: p.menuColor -> getWithDefault(p.fontColor -> getWithDefault(defaultStyles.menuColor))
  })
  | None => defaultStyles
  }
  
}

type shouldCloseOnClickType = (Dom.element, Js.Nullable.t<Dom.element>, Js.Nullable.t<Dom.element>) => bool
let shouldCloseOnClick: shouldCloseOnClickType = (clickedEl, menu, drawer) => {
  if menu == Js.Nullable.null || drawer == Js.Nullable.null {
    true
  } else if menu->contains(clickedEl) || drawer->contains(clickedEl) {
    false
  } else {
    true
  }
}