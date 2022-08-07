// reducer function
const reducer = (state, action) => {
  if (action.type === "SHOW_MODAL_PREVIEW") {
    return {
      ...state,
      showPreview: true,
    };
  }
  if (action.type === "LOAD_MODAL_PREVIEW") {
    return {
      ...state,
      previewVideo: { ...action.payload },
    };
  }
  if (action.type === "CLOSE_MODAL_PREVIEW") {
    return {
      ...state,
      showPreview: false,
    };
  }
  throw new Error("no matching action type !!!");
};

export default reducer;
