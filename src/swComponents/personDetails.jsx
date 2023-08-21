import React from "react";
import ItemDetails, { Record } from "../itemDetails";
import { withSwapiContext } from "../hoc-helpers";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Eye color" field="eyeColor" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPeopleById,
    getImgUrl: swapiService.getPersonImg,
  };
};

export default withSwapiContext(PersonDetails, mapMethodsToProps);
