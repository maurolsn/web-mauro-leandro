/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Error from "./Error";
import Taken from "draws/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    title="Pagina não encontrada"
    image={<Taken />}
    desccription="Esta pagina foi abduzida"
  />
);
