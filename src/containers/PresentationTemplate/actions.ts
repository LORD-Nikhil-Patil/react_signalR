import { api, apiEndPoints } from '../../api';
import { SET_OW_LANGUAGE } from './constants';

const setOwLanguage = (payload: any) => ({
  type: SET_OW_LANGUAGE,
  payload,
});

type presentationFormCreateType = {
  description: String;
  Language: Number;
  active: boolean;
};

export const addPresentationTemplate = async (
  data: presentationFormCreateType,
) => {
  const body = {
    description: data.description,
    active: data.active,
    Language: data.Language,
  };

  try {
    const response = await api.post(
      apiEndPoints.createPresentationTemlplate,
      JSON.stringify(body),
    );
    
    return response;
  } catch (err: any) {
    return err
  }
};

export const getOwLanguage = async dispatch => {
  try {
    const response = await api.get(apiEndPoints.OwLanguage);
    dispatch(setOwLanguage(response.data.result.items));
  } catch (err) {
    console.error(err);
  }
};
