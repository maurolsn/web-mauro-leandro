import React from "react";
//import PropTypes from "prop-types";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

import Hero from "Components/molecules/Hero";
import bambu from "Components/assets/bambu.jpg";
import Heading from "Components/atoms/Heading";
import Button from "Components/atoms/Button";
import Grid from "Components/atoms/Grid";
import Feature from "Components/atoms/Feature";
import Section from "Components/molecules/Section";
import programing from "Components/assets/programing.mp4";
import Footer from "Components/organisms/Footer";

const Home = () => (
  <>
    <Hero image={bambu}>
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

    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>

    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Mauro Leandro</h2>
          </Heading>
          <p>
            Amor por Tecnologia e inovações. Amor por desafios e novas
            descobertas!
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={programing} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
