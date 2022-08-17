import { SET_OW_LANGUAGE } from "./constants";

const initialState = {
  owLanguage: [],
};

const presentationTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OW_LANGUAGE:
      return { ...state, owLanguage: action.payload || [] };
    default:
      return state;
  }
};

export default presentationTemplateReducer;
