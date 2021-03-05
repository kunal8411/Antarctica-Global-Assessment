import {
    ACTIVATE_NON_AUTH_LAYOUT,
    TOGGLE,
    TOGGLE_RIGHT_SIDEBAR,
    HIDE_RIGHT_SIDEBAR,
    CHANGE_LAYOUT,
    CHANGE_SIDEBAR_THEME,
    CHANGE_LAYOUT_WIDTH,
    CHANGE_SIDEBAR_TYPE,
    CHANGE_TOPBAR_THEME,
    CHANGE_PRELOADER
} from './actionTypes';

const initialState={
    layoutType: "verical",
    topbarTheme: "light",
    leftSideBarTheme: "dark",
    layoutWidth: "fluid",
    leftSideBarType: "default",
    isPreloader : false,
    is_toggle : true,
    show_rightsidebar : false,
    isMobile: false
}

const layout = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_LAYOUT:
            return {
              ...state,
              layoutType: action.payload
            };

        case CHANGE_SIDEBAR_THEME:
            return {
                ...state,
                leftSideBarTheme: action.payload
            };

        case CHANGE_PRELOADER:
            return {
                ...state,
                isPreloader: action.payload
            };

        case CHANGE_LAYOUT_WIDTH:
            return {
                ...state,
                layoutWidth: action.payload.width
            };

        case CHANGE_SIDEBAR_TYPE:
            return {
                ...state,
                leftSideBarType: action.payload.sidebarType
            };
        
        case CHANGE_TOPBAR_THEME:
            return {
                ...state,
                topbarTheme: action.payload
            };

        case ACTIVATE_NON_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;

        case TOGGLE:
            state = {
                ...state,
                is_toggle : action.payload
            }
            break;
        
        case TOGGLE_RIGHT_SIDEBAR:
            state = {
                ...state,
                show_rightsidebar : action.payload
            }
            break;
        
        case HIDE_RIGHT_SIDEBAR:
            state = {
                ...state,
                show_rightsidebar : false
            }
            break;

        default:
            state = {...state};
            break;
    }
    return state;
}

export default layout;