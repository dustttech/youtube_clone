import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  showPreview: false,
  previewVideo: null,
  hoverInterval: null,
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showPreviewVideo = () => {
    dispatch({ type: "SHOW_MODAL_PREVIEW" });
  };
  const loadPreviewVideo = (detail) => {
    dispatch({ type: "LOAD_MODAL_PREVIEW", payload: detail });
  };
  const closePreviewVideo = () => {
    dispatch({ type: "CLOSE_MODAL_PREVIEW" });
  };
  const processHover = (time, cb = (f) => f) => {
    let hoverTime = 0;
    state.hoverInterval = setInterval(() => {
      if (++hoverTime >= time) {
        clearInterval(state.hoverInterval);
        cb();
      }
    }, 1000);
  };
  const resetHover = () => {
    clearInterval(state.hoverInterval);
    state.hoverInterval = null;
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        showPreviewVideo,
        loadPreviewVideo,
        closePreviewVideo,
        processHover,
        resetHover,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
