/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

import Feature from "./Feature";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="My Title">
    <p>I Love Java Script</p>
  </Feature>
);

export const WithGrid = () => (
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
);
