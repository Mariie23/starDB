import React from "react";
import ItemDetails, { Record } from "../itemDetails";
import { withSwapiContext } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Population" field="population" />
      <Record label="Rotation period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanetById,
    getImgUrl: swapiService.getPlanetImg,
  };
};

export default withSwapiContext(PlanetDetails, mapMethodToProps);
