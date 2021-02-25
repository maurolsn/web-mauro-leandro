/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"; //imr
import PropTypes from "prop-types"; //impt
import styled, { css } from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.6);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding: 0%;
  }

  li {
    &:before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;
//sl
const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
