import { api, apiEndPoints } from "../../api";
import { SET_PRESENTATION_SLIDES } from "./constants";

export const setPresentationSlides = (payload: any) => ({
  type: SET_PRESENTATION_SLIDES,
  payload,
});

export const getPresentationSlides = async (dispatch) => {
  const body = {
    templateId: 1,
  };
  try {
    const response = await api.get(apiEndPoints.getTemplateSlideById, {
      params: body,
    });
    if (response.data.success) {
      dispatch(setPresentationSlides(response.data.result.items));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getParticipantsScreen = async (screen) => {
  try {
    const res = await api.put(apiEndPoints.UpdateParticipantsSlide(screen));
  } catch (err) {
    console.log(err);
  }
};
