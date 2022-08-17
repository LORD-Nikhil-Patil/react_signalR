import { api, apiEndPoints } from '../../api';
import { setPresentationSlides } from '../facilitatorDelivery/actions';


export const getPresentationSlides = async dispatch => {
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