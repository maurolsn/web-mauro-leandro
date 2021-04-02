/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import BreadCrumb from "./BreadCrumb";

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};
const items = [{ label: "início", link: "/" }, { label: "Sobre" }];
export const usage = () => <BreadCrumb items={items} />;
