import React from "react";
import { SwapiConsumer } from "../swapiServiceContext";

const withSwapiContext = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiConsumer>
    );
  };
};

export default withSwapiContext;
