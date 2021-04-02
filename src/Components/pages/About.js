import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useScrollToTop } from "hooks/scroll";

import Hero from "Components/molecules/Hero";
import Heading from "Components/atoms/Heading";
import bambu from "Components/assets/bambu.jpg";
import Section from "Components/molecules/Section";
import Grid from "Components/atoms/Grid";
import AboutImage from "draws/About";
import Footer from "Components/organisms/Footer";

import InstImage1 from "Components/assets/instructors/inst11.jpg";
import InstImage2 from "Components/assets/instructors/inst2.jpg";
import InstImage3 from "Components/assets/instructors/inst3.jpg";
import InstImage4 from "Components/assets/instructors/inst4.jpg";
import InstImage5 from "Components/assets/instructors/inst5.jpg";
import Card, { CardMedia, CardMediaDescription } from "Components/atoms/Card";
import BreadCrumb from "Components/atoms/BreadCrumb";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  {
    id: 1,
    name: "Thor",
    avatar: InstImage1,
  },
  {
    id: 2,
    name: "Mel",
    avatar: InstImage2,
  },
  {
    id: 3,
    name: "Mike",
    avatar: InstImage3,
  },
  {
    id: 4,
    name: "Odin",
    avatar: InstImage4,
  },
  {
    id: 5,
    name: "Bob",
    avatar: InstImage5,
  },
];

const About = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={bambu}>
        <Heading>
          <h1>
            Auto Escola <strong>Nardine</strong>
          </h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "início", link: "/" }, { label: "Sobre" }]}
        />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <ul>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

About.defaultProps = {};

About.propTypes = {};

export default About;
