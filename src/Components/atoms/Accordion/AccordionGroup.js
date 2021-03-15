import React, { useState } from "react";
import PropTypes from "prop-types";

const AcordionGroup = ({ children }) => {
  const [index, setInddex] = useState(-1);

  return React.Children.map(children, (child, childIndex) =>
    React.cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setInddex(-1);
        } else {
          setInddex(childIndex);
        }
      },
    })
  );
};

AcordionGroup.defaultProps = {
  children: undefined,
};

AcordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AcordionGroup;
