import img1 from '../../assets/images//HDStockImages.com-mZQ2iq.jpg';
import p1 from '../../assets/images/accessories.jpg';
import p2 from '../../assets/images/HDStockImages.com-mZQ2iq.jpg';
import p3 from '../../assets/images//expertTraine.jpeg';
import p5 from '../../assets/images/wideVarity.jpg';
import p8 from '../../assets/images/heroSection.jpg';
import p10 from '../../assets/images/mission.jpg';
import p14 from '../../assets/images/heroSection.jpg';

import React from 'react';
import './ImageGallery.css'

const images = [
  { src: p1, alt: 'Image 1', className: '' },
  { src: img1, alt: 'Image 21', className: '' },
  { src: p14, alt: 'Image 18', className: 'col-span-2' },
  { src: p10, alt: 'Image 22', className: 'col-span-2' },
  { src: p5, alt: 'Image 5' },
  { src: p8, alt: 'Image 8', className: 'row-span-2' },
  { src: p3, alt: 'Image 3', className: '' },
  { src: p2, alt: 'Image 2', className: 'col-span-2' },
];

const ImageGallery = () => {
  const [fullImage, setFullImage] = React.useState(null);

  const openFullimg = (pic) => {
    setFullImage(pic);
  };

  const closeFullimg = () => {
    setFullImage(null);
  };

  return (
    <div>
      <h1 className="text-center text-pink-600 animate__animated animate__flip">
        Pinterest
      </h1>

      {fullImage && (
        <div className="full-img" id="fullimgBox" onClick={closeFullimg}>
          <img
            src={fullImage}
            alt="Full View"
            id="fullimg"
            className="cursor-pointer"
          />
          <span
            onClick={closeFullimg}
            className="cursor-pointer text-white text-3xl absolute top-5 right-5"
          >
            X
          </span>
        </div>
      )}

      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-min">
        {images.map((image, index) => (
          <div key={index} className={image.className}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openFullimg(image.src)}
              className="w-full h-full object-cover cursor-pointer rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
