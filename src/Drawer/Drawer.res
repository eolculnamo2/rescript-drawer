@module("./Drawer.module.css") external styles: {..} = "default"
@module external helpers: {..} = "./helpers.ts"

@send
external contains: (Js.Nullable.t<Dom.element>, Dom.element) => bool = "contains"

@val external window: {..} = "window"
external myShadyConversion: {..} => Dom.element = "%identity"

@react.component
@genType
let make = (~children, ~backgroundColor: string) => {
  let (isOpen, setOpen) = React.useState(_ => false)
  let menuRef: React.ref<Js.Nullable.t<Dom.element>> = React.useRef(Js.Nullable.null)
  let drawerRef: React.ref<Js.Nullable.t<Dom.element>> = React.useRef(Js.Nullable.null)

  let clickOff = (clickedEl: Dom.element) => {
    if menuRef.current == Js.Nullable.null || drawerRef.current == Js.Nullable.null {
      setOpen(_ => false)
    } else if menuRef.current->contains(clickedEl) || drawerRef.current->contains(clickedEl) {
      ()
    } else {
      setOpen(_ => false)
    }
  }

  React.useEffect0(() => {
    helpers["setCssVar"]("--rs-drawer-primary", backgroundColor)

    let mouseUpCb = (e: ReactEvent.Mouse.t) =>
      clickOff(ReactEvent.Mouse.target(e)->myShadyConversion)
    let resizeCb = () => setOpen(_ => false)
    window["addEventListener"]("mouseup", mouseUpCb)
    window["addEventListener"]("resize", resizeCb)

    Some(
      () => {
        window["removeEventListener"]("mouseup", mouseUpCb)
        window["removeEventListener"]("resize", resizeCb)
        ()
      },
    )
  })
  <>
    <div
      role="button"
      tabIndex={-1}
      onKeyDown={_ => setOpen(prev => !prev)}
      ref={menuRef->ReactDOM.Ref.domRef}
      className={styles["hamburger-menu"] ++ " " ++ (isOpen ? styles["hamburger-open"] : "")}
      onClick={e => setOpen(prev => !prev)}>
      <div className={styles["hamburger-line"] ++ " " ++ styles["line1"]} />
      <div className={styles["hamburger-line"] ++ " " ++ styles["line2"]} />
      <div className={styles["hamburger-line"] ++ " " ++ styles["line3"]} />
    </div>
    <div
      className={styles["hamburger-drawer"] ++
      " " ++ (isOpen ? styles["hamburger-drawer-open"] : "")}
      ref={drawerRef->ReactDOM.Ref.domRef}>
      {children}
    </div>
  </>
}
