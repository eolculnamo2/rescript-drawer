// setCssVar(document.getElementById("foo")!, "--foo", "yellow");

export const setCssVar = (name: `--${string}`, value: string) => {
  document.body.style.setProperty(name, value);
};
