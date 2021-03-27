import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "Components/molecules/Hero";
import Heading from "Components/atoms/Heading";
import bambu from "Components/assets/bambu.jpg";
import Section from "Components/molecules/Section";
import Grid from "Components/atoms/Grid";
import AboutImage from "draws/About";
import Footer from "Components/organisms/Footer";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={bambu}>
      <Heading>
        <h1>
          Auto Escola <strong>Nardine</strong>
        </h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </li>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </li>
          </ul>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
