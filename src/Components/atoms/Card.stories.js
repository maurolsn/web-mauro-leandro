/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Card, { CardBody, CardMedia } from "./Card";
import Heading from "./Heading";
import Button from "./Button";
import Placeholderimage from "Components/assets/CardImage.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Card>
    <CardBody>
      <Heading>
        <h6>Title</h6>
      </Heading>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here
      </p>
      <div>
        <Button color="primary" variant="link">
          Know more
        </Button>
      </div>
    </CardBody>
  </Card>
);

export const withMedia = () => (
  <Card>
    <CardMedia image={Placeholderimage} />
    <CardBody>
      <Heading>
        <h6>Title</h6>
      </Heading>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here
      </p>
      <div>
        <Button color="primary" variant="link">
          Know more
        </Button>
      </div>
    </CardBody>
  </Card>
);
