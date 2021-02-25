import React from "react";
import { actions } from "@storybook/addon-actions";
import styled from "styled-components";

import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Button",
  componet: Button,
};

const events = actions({ onClick: "Clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;
export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Defaut</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        Defaut
      </Button>
      <Button color="primary" disabled {...events}>
        Primary
      </Button>
      <Button color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        Defaut
      </Button>
      <Button variant="outlined" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="outlined" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled {...events}>
        Defaut
      </Button>
      <Button variant="outlined" color="primary" disabled {...events}>
        Primary
      </Button>
      <Button variant="outlined" color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...events}>
        Defaut
      </Button>
      <Button variant="link" color="primary" {...events}>
        Primary
      </Button>
      <Button variant="link" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled {...events}>
        Defaut
      </Button>
      <Button variant="link" color="primary" disabled {...events}>
        Primary
      </Button>
      <Button variant="link" color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);
