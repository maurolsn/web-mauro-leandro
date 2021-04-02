import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScrollToTop } from "hooks/scroll";

import Hero from "Components/molecules/Hero";
import Heading from "Components/atoms/Heading";
import Section from "Components/molecules/Section";
import Footer from "Components/organisms/Footer";
import bambu from "Components/assets/bambu.jpg";
import SpeedImage from "draws/Speed";
import Button from "Components/atoms/Button";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "Components/atoms/Callout";
import BreadCrumb from "Components/atoms/BreadCrumb";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: midlle;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const ProductDetail = () => {
  useScrollToTop();
  return (
    <>
      <Hero image={bambu}>
        <Heading>
          <h1>Nome do serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "início", link: "/" },
            { label: "Serviços" },
            { label: "Nome do Serviço" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h5>Documentos Necessários</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de nascimento ou Casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de Residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Titulo</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <SpeedImage />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
