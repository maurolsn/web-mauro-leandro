import React from "react";
import PropTypes from "prop-types";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "models/types/ProductTypes";
import Hero from "Components/molecules/Hero";
import bambu from "Components/assets/bambu.jpg";
import Heading from "Components/atoms/Heading";
import Button from "Components/atoms/Button";
import Grid from "Components/atoms/Grid";
import Feature from "Components/atoms/Feature";
import Section from "Components/molecules/Section";
import programing from "Components/assets/programing.mp4";
import Footer from "Components/organisms/Footer";
import ProductGrid from "Components/organisms/ProductGrid";
import Accordion, { AcordionGroup } from "Components/atoms/Accordion";

const Home = ({ products }) => (
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
        <ProductGrid products={products} />
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
            <Button as={Link} to="/sobre" color="primary">
              Saiba Mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={programing}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AcordionGroup>
        <Accordion title="Como posso se tornar um Dev?">
          Não é preciso necessáriamente ter talento para ser um Desenvolvedor, o
          mais importante é ter muita dedicação e amor.
        </Accordion>

        <Accordion title="O que é necessário para ser um Dev?">
          Não é preciso necessáriamente ter talento para ser um Desenvolvedor, o
          mais importante é ter muita dedicação e amor.
        </Accordion>

        <Accordion title="Por onde começar?">
          Não é preciso necessáriamente ter talento para ser um Desenvolvedor, o
          mais importante é ter muita dedicação e amor.
        </Accordion>
      </AcordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
