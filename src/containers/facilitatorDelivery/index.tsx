import React from 'react';
import { useFacilitatorDelivery } from './hooks';
const FacilitatorDelivery = () => {
  const {
    renderHTML,
    currentSlide,
    previousSlide,
    nextSlide,
    thumbnailList,
    nextThumbnails,
    previousThumbnails,
    onThumbnailClick,
  } = useFacilitatorDelivery();


  return (
    <div className="facilitator-page">
      <div className="screens">
        <a onClick={() => previousSlide()}>
          <i className="fas fa-chevron-left"></i>
        </a>
        <div className="carousel">
          {' '}
          {currentSlide && renderHTML(currentSlide.html, currentSlide.id)}
        </div>
        <a onClick={() => nextSlide()}>
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="thumbnail">
        <a onClick={() => previousThumbnails()}>
          <i className="fas fa-chevron-left"></i>
        </a>
        <div className="thumbnail-carousel">
          {' '}
          {thumbnailList &&
            thumbnailList.map(res => (
              <li
                key={res.id}
                className={currentSlide && currentSlide.id === res.id
                  ? 'active'
                  : ''}
                onClick={() => onThumbnailClick(res.id)}
              >
                {' '}
                {res.id}
              </li>
            ))}
        </div>
        <a onClick={() => nextThumbnails()}>
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default FacilitatorDelivery;
