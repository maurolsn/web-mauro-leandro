/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Accordion from "./Accordion";
import AcordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
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
  </>
);

export const withGroup = () => (
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
);
