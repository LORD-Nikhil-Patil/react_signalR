import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { RootState } from '../rootState';

import * as Yup from 'yup';
import { addPresentationTemplate, getOwLanguage } from './actions';

export const addNewPresentaionTemplateHook = () => {
  const dispatch = useDispatch();
  const owLanguage = useSelector(
    (state: RootState) => state.presentationTemplateReducer.owLanguage,
  );
  const [showPresentaionTemplate, setShowpresentaionTemplate] = useState(false);
  const [errors, setErrors] = useState({
    PresentationTempError: '',
  });
  useEffect(() => {
    getOwLanguage(dispatch);
  }, []);

  const createPresentationTemlplate = useFormik({
    initialValues: {
      description: '',
      Language: 0,
      active: true,
    },

    validationSchema: Yup.object({
      description: Yup.string().required(
        'Your Description must be 8-20 characters long.',
      ),
    }),

    onSubmit: values => {
      addPresentationTemplate(values).then(res =>
        res.name === 'AxiosError'
          ? setErrors({
              ...errors,
              PresentationTempError: JSON.stringify(res.response.data.error.message),
            })
          :setErrors({
            ...errors,
            PresentationTempError:"",
          }),
      );
    },
  });

  return {
    showPresentaionTemplate,
    setShowpresentaionTemplate,
    createPresentationTemlplate,
    owLanguage,
    errors,
  };
};
