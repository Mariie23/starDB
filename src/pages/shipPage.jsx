import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShipDetails, StarshipList } from "../swComponents";

const ShipPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <StarshipList onSelectItem={(id) => navigate(`/ships/${id}`)} />
      {id && <ShipDetails itemId={id} />}
    </>
  );
};

export default ShipPage;
