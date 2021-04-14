import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

import eye from "../images/eye.svg";
import circles from "../images/circles.svg";
import tale from "../images/tale.svg";
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: #eff6eb;
  color: var(--secondary);
`;

const Slide = styled.div`
  position: relative;
  display: none;
  max-width: 60rem;
  padding: 0 10rem 0rem 10rem;
  text-align: center;

  &.active {
    display: block;
  }
`;

const Arrow = styled.img`
  padding-top: 10rem;
`;

const Icon = styled.img`
  width: 20rem;
  height: 8rem;
`;

const Title = styled.h2``;

const Text = styled.p`
  font-size: 2.4rem;
  line-height: 33px;
`;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderList = [
    {
      icon: eye,
      title: "Find out Secret places",
      text:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      icon: circles,
      title: "Discover a new culture",
      text:
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Donec sed odio dui.",
    },
    {
      icon: tale,
      title: "Create new stories to tell",
      text:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit.",
    },
  ];

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(sliderList.length - 1);
    }
  };
  const nextSlide = () => {
    if (currentIndex < sliderList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const displayList = sliderList.map((slide, index) => (
    <Slide key={index} className={index === currentIndex ? "active" : ""}>
      <Icon src={slide.icon} alt="icon" />
      <Title>{slide.title}</Title>
      <Text>{slide.text}</Text>
    </Slide>
  ));

  return (
    <Container>
      <Arrow src={arrowLeft} onClick={() => prevSlide()} alt="Left Arrow" />
      {displayList}
      <Arrow src={arrowRight} onClick={() => nextSlide()} alt="Right Arrow" />
    </Container>
  );
};

export default Slider;
