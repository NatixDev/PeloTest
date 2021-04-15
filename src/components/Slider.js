import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

import eye from "../images/eye.svg";
import circles from "../images/circles.svg";
import tale from "../images/tale.svg";
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";

const Container = styled.div`
  min-height: 40rem;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eff6eb;
  color: var(--secondary);
`;

const SlideContainer = styled.div`
  width: 60rem;
  padding: 0 10rem 0rem 10rem;
`;

const Slide = styled.div`
  position: relative;
  display: none;
  text-align: center;

  &.active {
    display: block;
  }
`;

const Arrow = styled.img`
  padding-top: 10rem;
  cursor: pointer;
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
  const slideRefs = React.useRef({});

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
    gsap.to(slideRefs.current[currentIndex], {
      autoAlpha: 0,
      display: "none",
      duration: 0.75,
      ease: "power3.in",
    });
    if (currentIndex > 0) {
      gsap.fromTo(
        slideRefs.current[currentIndex - 1],
        {
          autoAlpha: 0,
          display: "none",
        },
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.75,
          delay: 0.75,
          ease: "power3.out",
        }
      );
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 750);
    } else {
      gsap.fromTo(
        slideRefs.current[sliderList.length - 1],
        {
          autoAlpha: 0,
          display: "none",
        },
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.75,
          delay: 0.75,
          ease: "power3.out",
        }
      );
      setTimeout(() => {
        setCurrentIndex(sliderList.length - 1);
      }, 750);
    }
  };
  const nextSlide = () => {
    gsap.to(slideRefs.current[currentIndex], {
      autoAlpha: 0,
      display: "none",
      duration: 0.75,
      ease: "power3.in",
    });
    if (currentIndex < sliderList.length - 1) {
      gsap.fromTo(
        slideRefs.current[currentIndex + 1],
        {
          autoAlpha: 0,
          display: "none",
        },
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.75,
          delay: 0.75,
          ease: "power3.out",
        }
      );
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 750);
    } else {
      gsap.fromTo(
        slideRefs.current[0],
        {
          autoAlpha: 0,
          display: "none",
        },
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.75,
          delay: 0.75,
          ease: "power3.out",
        }
      );
      setTimeout(() => {
        setCurrentIndex(0);
      }, 750);
    }
  };

  const displayList = sliderList.map((slide, index) => (
    <Slide
      key={index}
      className={index === currentIndex ? "active" : ""}
      ref={element => (slideRefs.current[index] = element)}
    >
      <Icon src={slide.icon} alt="icon" />
      <Title>{slide.title}</Title>
      <Text>{slide.text}</Text>
    </Slide>
  ));

  return (
    <Container>
      <Arrow src={arrowLeft} onClick={() => prevSlide()} alt="Left Arrow" />
      <SlideContainer>{displayList}</SlideContainer>
      <Arrow src={arrowRight} onClick={() => nextSlide()} alt="Right Arrow" />
    </Container>
  );
};

export default Slider;
