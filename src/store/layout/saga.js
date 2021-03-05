import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  CHANGE_LAYOUT,
  CHANGE_TOPBAR_THEME,
  CHANGE_SIDEBAR_THEME,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_TYPE,
} from "./actionTypes";

import {
    changeTopbarTheme as changeTopbarThemeAction,
    changeSidebarType as changeSidebarTypeAction,
} from "./actions";

//for set attribute according to layout types and sidebar types
function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value);
    return true;
}

// commom function for managing body class
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

//for change sidebar type
function* changeLeftSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case "compact":
        yield call(manageBodyClass, "sidebar-enable", "add");
        if (!isMobile) {
          yield call(changeBodyAttribute, "data-sidebar-size", "small");
          yield call(manageBodyClass, "sidebar-enable", "remove");
          yield call(manageBodyClass, "vertical-collpsed", "remove");
        }
        break;
      case "icon":
        yield call(changeBodyAttribute, "data-keep-enlarged", "true");
        yield call(manageBodyClass, "vertical-collpsed", "add");
        break;
      case "condensed":
        yield call(manageBodyClass, "sidebar-enable", "add");
        if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "add");
        break;
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "remove");
        break;
    }
  } catch (error) { }
}

//For changing layout type
function* changeLayout({ payload: layout }) {
    try {
      if (layout === 'horizontal') {
        yield put(changeTopbarThemeAction('light'));
        document.body.removeAttribute('data-sidebar');
      } else {
        yield put(changeTopbarThemeAction('light'));
      }
      yield call(changeBodyAttribute, "data-layout", layout);
      
    } catch (error) { }
}

//for change sidebar theme(light/dark)
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme);
    if(theme === "light")
      //Fire action for changing dark theme of topbar
      yield put(changeTopbarThemeAction('dark'));
    if(theme === "dark")
      //Fire action for changing light theme of topbar
      yield put(changeTopbarThemeAction('light'));
    if(theme === "colored")
      //Fire action for changing light theme of topbar
      yield put(changeTopbarThemeAction('light'));
  } catch (error) { }
}

//For change layout width
function* changeLayoutWidth({ payload: { width, layoutType } }) {
  try {
    if(layoutType === "vertical") {
      if (width === 'boxed') {
        yield put(changeSidebarTypeAction("icon"));
      } else {
        yield put(changeSidebarTypeAction("default"));
      }
    }
    yield call(changeBodyAttribute, "data-layout-size", width);
  } catch (error) { }
}

//for change topbar theme
function* changeTopbarTheme({ payload: theme }) {
    try {
      yield call(changeBodyAttribute, "data-topbar", theme);
    } catch (error) { }
}

export function* watchChangeLayoutType() {
    yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

export function* watchChangeTopbarTheme() {
    yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme);
}

export function* watchChangeLeftSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}

function* LayoutSaga() {
    yield all([
      fork(watchChangeLayoutType),
      fork(watchChangeTopbarTheme),
      fork(watchChangeLeftSidebarTheme),
      fork(watchChangeLayoutWidth),
      fork(watchChangeLeftSidebarType),
    ]);
  }

export default LayoutSaga;