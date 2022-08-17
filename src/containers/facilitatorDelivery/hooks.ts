import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../rootState";
import { getPresentationSlides, getParticipantsScreen } from "./actions";

type slide = {
  description: string;
  html: string;
  htmlUrl: any;
  id: number;
  isActive: boolean;
  partNumber: number;
  presentationTemplate: any;
  presentationTemplateId: number;
  slideNumber: number;
  tenantId: number;
};

type slides = slide[];

export const useFacilitatorDelivery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FacilitatorSlides = useSelector(
    (state: RootState) => state.facilitatorDeliveryReducer.presentationSlides,
  );
  console.log("FacilitatorSlides", FacilitatorSlides)
  const [carouselSlideIndex, setCarouselSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<slide>();
  const [thumbnailList, setThumbnailList] = useState<slides>([]);

  useEffect(() => {
    getPresentationSlides(dispatch);
  }, []);

  useEffect(() => {
    setCurrentSlide(FacilitatorSlides[carouselSlideIndex]);
    setCarouselSlideIndex(0);
    setThumbnailList(FacilitatorSlides.slice(0, 3));
  }, [FacilitatorSlides]);

  useEffect(() => {
    currentSlide && getParticipantsScreen(currentSlide.id);
  }, [currentSlide]);

  const renderHTML = (rawHTML: string, id: number) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
      className: `slide-${id}`,
    });

  const previousSlide = () => {
    if (carouselSlideIndex === 0) {
      setCurrentSlide(FacilitatorSlides[FacilitatorSlides.length - 1]);
      setCarouselSlideIndex(FacilitatorSlides.length - 1);
    } else {
      setCurrentSlide(FacilitatorSlides[carouselSlideIndex - 1]);
      setCarouselSlideIndex(carouselSlideIndex - 1);
    }
  };

  const nextSlide = () => {
    if (carouselSlideIndex === FacilitatorSlides.length - 1) {
      setCurrentSlide(FacilitatorSlides[0]);
      setCarouselSlideIndex(0);
    } else {
      setCurrentSlide(FacilitatorSlides[carouselSlideIndex + 1]);
      setCarouselSlideIndex(carouselSlideIndex + 1);
    }
  };

  const nextThumbnails = () => {
    const lastIndex = FacilitatorSlides.indexOf(
      thumbnailList[thumbnailList.length - 1],
    );
    if (lastIndex === FacilitatorSlides.length - 1) {
      setThumbnailList(FacilitatorSlides.slice(0, 3));
    } else {
      setThumbnailList(FacilitatorSlides.slice(lastIndex, lastIndex + 3));
    }
  };

  const previousThumbnails = () => {
    const firstIndex = FacilitatorSlides.indexOf(thumbnailList[0]);

    if (firstIndex === 0) {
      setThumbnailList(
        FacilitatorSlides.slice(
          FacilitatorSlides.length - 3,
          FacilitatorSlides.length,
        ),
      );
    } else if (firstIndex === 2) {
      setThumbnailList(FacilitatorSlides.slice(0, 3));
    } else {
      setThumbnailList(FacilitatorSlides.slice(firstIndex - 3, firstIndex));
    }
  };

  const onThumbnailClick = (id: number) => {
    FacilitatorSlides.map((res, index) => {
      if (res.id === id) {
        setCurrentSlide(FacilitatorSlides[index]);
        setCarouselSlideIndex(index);
      }
    });
  };

  return {
    renderHTML,
    currentSlide,
    previousSlide,
    nextSlide,
    thumbnailList,
    nextThumbnails,
    previousThumbnails,
    onThumbnailClick,
  };
};
