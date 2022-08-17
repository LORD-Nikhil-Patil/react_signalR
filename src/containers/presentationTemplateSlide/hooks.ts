import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { presentationSlideFormCreate } from "./actions";
export const presentationSlideForm = () => {
  const [errors, setErrors] = useState({
    PresentationTempSlideError: "",
  });
  const createPresentationTemlplateSlide = useFormik({
    initialValues: {
      presentationTemplateId: 0,
      slide: 0,
      partNo: 0,
      description: "",
      html: "",
      active: true,
    },

    onSubmit: (values) => {
      presentationSlideFormCreate(values).then((res: any) => {
        if (res.name === "AxiosError") {
          setErrors({
            ...errors,
            PresentationTempSlideError: JSON.stringify(
              res.response.data.error.message,
            ),
          });
        } else {
          setErrors({
            ...errors,
            PresentationTempSlideError: "",
          });
        }
      });
    },
  });

  return { createPresentationTemlplateSlide, errors };
};
