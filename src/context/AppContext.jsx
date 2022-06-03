import { createContext, useState, useReducer, useEffect } from "react";
// import { data } from "../data/lang/data.js";
import appReducer, {
  SWITCH_LANGUAGE,
  SWITCH_THEME,
} from "../reducers/AppReducers";
const initialState = {
  theme: "light",
  lang: "pl",
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const switchTheme = () => {
    dispatch({ type: SWITCH_THEME });
  };

  const switchLanguage = () => {
    dispatch({ type: SWITCH_LANGUAGE });
  };

  return (
    <AppContext.Provider
      value={{
        switchTheme,
        switchLanguage,
        theme: state.theme,
        lang: state.lang,
        data: state.data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
