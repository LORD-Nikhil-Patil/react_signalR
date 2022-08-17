import { combineReducers } from "redux";
import facilitatorDeliveryReducer from "../containers/facilitatorDelivery/reducer";
import presentationTemplateReducer from "../containers/PresentationTemplate/reducer";

export function createReducer() {
  const rootReducer = combineReducers({
    presentationTemplateReducer,
    facilitatorDeliveryReducer
  });

  return rootReducer;
}
