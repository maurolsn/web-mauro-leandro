import React from "react";
//import PropTypes from "prop-types";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

import Hero from "Components/molecules/Hero";
import Code2 from "Components/assets/code2.jpg";
import Heading from "Components/atoms/Heading";
import Button from "Components/atoms/Button";
import Grid from "Components/atoms/Grid";
import Feature from "Components/atoms/Feature";
import Section from "Components/molecules/Section";
const Home = () => (
  <>
    <Hero image={Code2}>
      <Heading>
        <h1>
          A alegria que se tem em <strong>pensar e aprender</strong> faz-nos
          pensar e aprender ainda mais.
          <br /> <strong>(Aristóteles)</strong>
        </h1>
      </Heading>
      <ul>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
      </ul>
      <Button variant="outlined" color="primary">
        Know more
      </Button>
    </Hero>

    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Bigger and Better Always">
          <p>I Love Java Script</p>
        </Feature>
        <Feature icon={<FaKey />} title="In your hands is the key to success">
          <p>I Love Java Script</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Great location">
          <p>I Love Java Script</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Accessibility">
          <p>I Love Java Script</p>
        </Feature>
      </Grid>
    </Section>
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
