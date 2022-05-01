// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as HelpersTs from "./helpers.ts";
import DrawerModuleCss from "./Drawer.module.css";

var styles = DrawerModuleCss;

var helpers = HelpersTs;

function Drawer(Props) {
  var children = Props.children;
  var backgroundColor = Props.backgroundColor;
  var match = React.useState(function () {
        return false;
      });
  var setOpen = match[1];
  var isOpen = match[0];
  var menuRef = React.useRef(null);
  var drawerRef = React.useRef(null);
  React.useEffect((function () {
          Curry._2(helpers.setCssVar, "--rs-drawer-primary", backgroundColor);
          var mouseUpCb = function (e) {
            var clickedEl = e.target;
            if (menuRef.current === null || drawerRef.current === null) {
              return Curry._1(setOpen, (function (param) {
                            return false;
                          }));
            } else if (menuRef.current.contains(clickedEl) || drawerRef.current.contains(clickedEl)) {
              return ;
            } else {
              return Curry._1(setOpen, (function (param) {
                            return false;
                          }));
            }
          };
          var resizeCb = function (param) {
            return Curry._1(setOpen, (function (param) {
                          return false;
                        }));
          };
          Curry._2(window.addEventListener, "mouseup", mouseUpCb);
          Curry._2(window.addEventListener, "resize", resizeCb);
          return (function (param) {
                    Curry._2(window.removeEventListener, "mouseup", mouseUpCb);
                    Curry._2(window.removeEventListener, "resize", resizeCb);
                    
                  });
        }), []);
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  ref: menuRef,
                  className: styles["hamburger-menu"] + " " + (
                    isOpen ? styles["hamburger-open"] : ""
                  ),
                  role: "button",
                  tabIndex: -1,
                  onKeyDown: (function (param) {
                      return Curry._1(setOpen, (function (prev) {
                                    return !prev;
                                  }));
                    }),
                  onClick: (function (e) {
                      return Curry._1(setOpen, (function (prev) {
                                    return !prev;
                                  }));
                    })
                }, React.createElement("div", {
                      className: styles["hamburger-line"] + " " + styles.line1
                    }), React.createElement("div", {
                      className: styles["hamburger-line"] + " " + styles.line2
                    }), React.createElement("div", {
                      className: styles["hamburger-line"] + " " + styles.line3
                    })), React.createElement("div", {
                  ref: drawerRef,
                  className: styles["hamburger-drawer"] + " " + (
                    isOpen ? styles["hamburger-drawer-open"] : ""
                  )
                }, children));
}

var make = Drawer;

export {
  styles ,
  helpers ,
  make ,
  
}
/* styles Not a pure module */
