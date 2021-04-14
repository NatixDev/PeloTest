import React from "react";
import styled from "styled-components";

import title from "../images/title.svg";
import header from "../images/header.jpg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${header});
  background-size: cover;
`;

const Layer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(6, 33, 5, 0.6);
  mix-blend-mode: multiply;
`;

const Esperluette = styled.i`
  position: absolute;
  font-size: 63rem;
  left: 27rem;
  top: 5rem;
`;

const Logo = styled.img`
  position: fixed;
  top: 4.7rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h1`
  position: relative;
  margin-left: 10rem;

  span {
    display: block;

    &:nth-of-type(2) {
      margin-top: -7rem;
      margin-left: 0.1rem;
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Text = styled.p`
  max-width: 28rem;
  line-height: 1.9rem;
  letter-spacing: 2px;
`;

const Button = styled.button`
  width: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 0 -4rem;
  padding: 2rem 4rem;
  background: var(--tertiary);
  border-radius: 2px;
`;

const Header = () => {
  return (
    <>
      <Layer>
        <Esperluette>&</Esperluette>
      </Layer>
      <Container>
        <Logo src={title} alt="Title" />
        <Title>
          <span>City</span>
          <span>Concrete</span>
        </Title>
        <Content>
          <Text>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus.
          </Text>
          <Button>Let’s signup</Button>
        </Content>
      </Container>
    </>
  );
};

export default Header;
