import { SET_PRESENTATION_SLIDES } from './constants';

const initialState = {
  presentationSlides: [],
};

const facilitatorDeliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESENTATION_SLIDES:
      return { ...state, presentationSlides: action.payload || [] };
    default:
      return state;
  }
};

export default facilitatorDeliveryReducer;
