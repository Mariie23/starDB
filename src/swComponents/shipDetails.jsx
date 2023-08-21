import React from "react";
import ItemDetails, { Record } from "../itemDetails";
import { withSwapiContext } from "../hoc-helpers";
const ShipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarsShipById,
    getImgUrl: swapiService.getStarshipImg,
  };
};

export default withSwapiContext(ShipDetails, mapMethodsToProps);
