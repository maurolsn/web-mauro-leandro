/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { FaPhone, FaLinkedinIn, FaInstagram, FaMailBulk } from "react-icons/fa";

import Container from "Components/atoms/Container";
import Grid from "Components/atoms/Grid";
import Heading from "Components/atoms/Heading";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FoorterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Mauro Leandro</h6>
          </Heading>
          <p>
            Front-end developer, passionate about technology and innovations.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <FoorterLink href="tel:73999338990">
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (73) 9 9933-8990
            </FoorterLink>
          </p>
          <p>
            <FoorterLink href="mailto:mauroleandrosn@gmail.com">
              <IconContainer>
                <FaMailBulk />
              </IconContainer>
              mauroleandrosn@gmail.com
            </FoorterLink>
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FoorterLink
              href="https://www.linkedin.com/in/mauroleandro/"
              target="_blank"
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FoorterLink>
          </p>
          <p>
            <FoorterLink
              href="https://www.instagram.com/leosantosoficial_2020/"
              target="_blank"
            >
              <IconContainer>
                <FaInstagram />
              </IconContainer>
              Instagran
            </FoorterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
