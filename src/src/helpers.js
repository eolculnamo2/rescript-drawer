export function setCssVar(name, value) {
  // todo figure out how to properly bind this in ReScript
  document.body.style.setProperty(name, value);
}
