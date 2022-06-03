export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export const SWITCH_THEME = "SWITCH_THEME";

export default function appReducer(state, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      let actualLang;
      if (state.lang === "pl") {
        actualLang = "en";
      } else if (state.lang === "en") {
        actualLang = "pl";
      }
      return {
        ...state,
        lang: actualLang,
      };
    case SWITCH_THEME:
      let actualTheme;
      if (state.theme === "light") {
        actualTheme = "dark";
      } else if (state.theme === "dark") {
        actualTheme = "light";
      }
      return {
        ...state,
        theme: actualTheme,
      };
    default:
      return state;
  }
}
