import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../Constant/Data';
import { styled } from '@mui/material';

const Image = styled('img')`
  width: 100%;
  max-height: 280px;
  object-fit: cover; /* Maintains aspect ratio and prevents image distortion */
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        {
          bannerData.map((data, index) => (
            <Image key={index} src={data.url} alt={data.id} />
          ))
        }
      </Carousel>
    </>
  );
}

export default Banner;
