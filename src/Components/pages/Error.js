import React from "react";
import PropTypes from "prop-types";

import Grid from "Components/atoms/Grid";
import Heading from "Components/atoms/Heading";
import styled from "styled-components";
import Section from "Components/molecules/Section";
import Button from "Components/atoms/Button";
import { Link } from "react-router-dom";

const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({ image, title, desccription }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorMessage>{desccription}</ErrorMessage>
        <div>
          <Button as={Link} to="/" color="primary">
            Ir para a pagina inicial
          </Button>
        </div>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
