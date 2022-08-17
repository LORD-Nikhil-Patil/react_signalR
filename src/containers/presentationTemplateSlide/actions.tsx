/* eslint-disable prettier/prettier */
import { api, apiEndPoints } from '../../api';

type presentationSlideFormCreateType = {
    presentationTemplateId: number,
    slide: number,
    partNo: number,
    description: string,
    html: string,
    active: boolean,
};

export const presentationSlideFormCreate = async (
    data: presentationSlideFormCreateType,
) => {
    const body = {
        presentationTemplateId: data.presentationTemplateId,
        slideNumber: data.slide,
        partNumber: data.partNo,
        description: data.description,
        html: data.html,
        isActive: data.active
    };
    try {
        const response = await api.post(
            apiEndPoints.createPresentationTemplateSlide,
            JSON.stringify(body),
        );
        return response;
    } catch (err: any) {
       return err;
    }
};