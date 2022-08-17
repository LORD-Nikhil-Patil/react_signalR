import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../rootState";
import { getPresentationSlides } from "./actions";

export const useParticipantDelivery = () => {
  type slide = {
    description: string;
    html: string;
    htmlUrl: any;
    id: number;
    isActive: Boolean;
    partNumber: number;
    presentationTemplate: any;
    presentationTemplateId: number;
    slideNumber: number;
    tenantId: number;
  };

  const FacilitatorSlides = useSelector(
    (state: RootState) => state.facilitatorDeliveryReducer.presentationSlides,
  );
  const [participantScreen, setParticipantScreen] = useState<slide>();

  const dispatch = useDispatch();
  const renderHTML = (rawHTML: string) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  useEffect(() => {
    getPresentationSlides(dispatch);

    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:92/signalr-delivery")
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then((result) => {
        connection.on("getParticipantSlide", (message) => {
          setParticipantScreen(
            FacilitatorSlides.find((slide) => slide.id === parseInt(message)),
          );
        });
      })
      .catch((e) => console.log("Connection failed: ", e));
  }, []);

  useEffect(() => {
    setParticipantScreen(FacilitatorSlides[0]);
  }, [FacilitatorSlides]);

  return {
    participantScreen,
    FacilitatorSlides,
    renderHTML,
  };
};
