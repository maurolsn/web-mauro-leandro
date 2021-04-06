import React from "react";

import Taken from "draws/Taken";
import Error from "Components/pages/Error";

const error404 = () => (
  <Error
    title="Pagina não encontrada"
    image={<Taken />}
    desccription="Esta pagina foi abduzida"
  />
);

export default error404;
