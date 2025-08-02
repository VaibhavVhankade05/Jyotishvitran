import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/casarole.css';

const Carousel = ({ data = [], sectionName }) => {
  const responsive = {
    0: { items: 2 },
    640: { items: 3 },
    768: { items: 4 },
    1024: { items: 5 },
    1280: { items: 6 },
  };

  const renderCard = (sign) => (
  <div
    key={sign.id || sign.name}
    className="flex flex-col items-center w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem] cursor-pointer"
  >
    <div className="h-[5rem] w-[5rem] overflow-hidden rounded shadow-md card m-2">
      <img
        loading="lazy"
        src={sign.imageUrl}
        alt={sign.name}
        className="w-full h-full object-cover" id='images'
      />
    </div>
    <p className="mt-2 text-sm font-medium text-gray-800 text-center">{sign.name}</p>
  </div>
);



  if (!data || data.length === 0) {
    return (
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold text-red-500">
          No zodiac data found for: {sectionName}
        </h2>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {sectionName && (
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{sectionName}</h2>
      )}
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={3000}
        infinite
        responsive={responsive}
        disableButtonsControls
        items={data.map(renderCard)}
      />
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string, // optional if name is unique
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired, // zodiac name like "Aries"
    })
  ).isRequired,
  sectionName: PropTypes.string,
};

export default Carousel;
