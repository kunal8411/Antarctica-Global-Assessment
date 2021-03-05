import {
    ACTIVATE_NON_AUTH_LAYOUT,
    TOGGLE,
    TOGGLE_RIGHT_SIDEBAR,
    HIDE_RIGHT_SIDEBAR,
    CHANGE_LAYOUT,
    CHANGE_SIDEBAR_THEME,
    CHANGE_LAYOUT_WIDTH,
    CHANGE_SIDEBAR_TYPE,
    CHANGE_PRELOADER,
    CHANGE_TOPBAR_THEME
} from './actionTypes';

export const changeLayout = layout => ({
    type: CHANGE_LAYOUT,
    payload: layout
});

export const changePreloader = layout => ({
    type: CHANGE_PRELOADER,
    payload: layout
});

export const changeSidebarTheme = theme => ({
    type: CHANGE_SIDEBAR_THEME,
    payload: theme
});

export const changeLayoutWidth = (width, layoutType) => ({
    type: CHANGE_LAYOUT_WIDTH,
    payload: { width, layoutType }
});

export const changeSidebarType = (sidebarType, isMobile) => {
    return {
      type: CHANGE_SIDEBAR_TYPE,
      payload: { sidebarType, isMobile }
    };
};

export const changeTopbarTheme = topbarTheme => (
    {
    type: CHANGE_TOPBAR_THEME,
    payload: topbarTheme
});

export const activateNonAuthLayout = () => {
    return {
        type: ACTIVATE_NON_AUTH_LAYOUT,
        payload: {
            topbar: false,
            sidebar: false,
            footer: false,
            layoutType: 'NonAuth'
        }
    }
}

export const toggleSidebar = (is_toggle) => {
    return {
        type: TOGGLE,
            payload: { is_toggle }
           
    }
}

export const toggleRightSidebar = (is_toggle) => {
    return {
        type : TOGGLE_RIGHT_SIDEBAR,
        payload : {is_toggle}
    }
}

export const hideRightSidebar = () => {
    return {
        type : HIDE_RIGHT_SIDEBAR,
        payload : null
    }
}


