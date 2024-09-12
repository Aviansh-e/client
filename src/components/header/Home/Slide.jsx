import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, styled, Button, Divider } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Components = styled(Box)`
  margin-top: 10px;
  background: #FFFFFF;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display:flex;
`;
const Timer = styled(Box)`
  display:flex;
  margin-left:10px;
  color:#7f7f7f;
  align-items:center;
  height:50px;
`;
const DealText = styled(Typography)`
  display:flex;
  font-size:22px;
  font-weight:600;
  margin-right:25px;
  line-height:32px;
`;
const ButtonAll = styled(Button)`
  border-radius:2px;
  margin-left:auto;
  
`;
const Image = styled("img")`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin: auto;
  display: block;
`;
const Text = styled(Typography)`
  font-size:15px;
  font-weight:600;
  text-align:center;
`;

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds}</Box>;
    };

    return (
        <Components>
            <Deal>
                <DealText>{title}</DealText>
                {timer && (
                    <Timer>
                        <Image style={{ height: 50 }} src={timerURL} alt="timer" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                )}
                <ButtonAll variant='contained' color="primary">VIEW ALL</ButtonAll>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40px"
                centerMode={true}
            >
                {products.map((data) => (
                    <Link to={`/product/${data.id}`} style={{ textDecoration: 'none' }} key={data.id}>
                        <Box>
                            <Image src={data.url} alt={data.id} />
                            <Text>{data.title.shortTitle}</Text>
                            <Text style={{ color: '#1b5e20' }}>{data.discount}</Text>
                            <Text>{data.tagline}</Text>
                        </Box>
                    </Link>
                ))}
            </Carousel>
        </Components>
    );
};

export default Slide;
