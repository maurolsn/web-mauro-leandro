/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Code1 from "../stories/assets/code.jpg";
import Heading from "./Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={Code1}>
    <Heading>
      <h1>
        {text(
          "Title",
          "A alegria que se tem em pensar e aprenderfaz-nos pensar e aprender ainda mais. (Aristóteles)"
        )}
      </h1>
      <p>{text("subtitle", "Mauro Leandro")}</p>
    </Heading>
    <ul>
      <li>JavaScript</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
    </ul>
  </Hero>
);
