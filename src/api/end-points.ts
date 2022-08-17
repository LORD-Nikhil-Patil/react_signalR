export default {
  logIn: "/TokenAuth/Authenticate",
  getLanguageText: "/services/app/Language/GetLanguageTexts",
  sendResetPasswordCode: "/services/app/Account/SendPasswordResetCode",
  GetLanguageTextsByLanguageName:
    "/services/app/Language/GetLanguageTextsByLanguageName",
  getUserByEmail: "/services/app/User/GetUserByEmail",
  createPresentationTemlplate: "/services/app/PresentationTemplate/Create",
  deletePresentationTemlplate: "/services/app/PresentationTemplate/Delete",
  getPresentationTemlplateById: "/services/app/PresentationTemplate/GetById",
  getAllPresentationTemlplate: "services/app/PresentationTemplate/GetAll",
  UpdatePresentationTemplate: "/services/app/PresentationTemplate/Present",
  createPresentationTemplateSlide:
    "./services/app/PresentationTemplateSlide/Create",
  OwLanguage: "/services/app/OwLanguage/GetAll",
  getTemplateSlideById:
    "/services/app/PresentationTemplateSlide/GetByTemplateId",
  UpdateParticipantsSlide: (slide) =>
    `/services/app/Delivery/UpdateParticipantsSlide?slide=${slide}`,
};
