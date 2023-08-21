import React from "react";
import { PlanetDetails, PlanetList } from "../swComponents";
import { useParams, useNavigate } from "react-router-dom";

const PlanetPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <PlanetList onSelectItem={(id) => navigate(`/planets/${id}`)} />
      {id && <PlanetDetails itemId={id} />}
    </>
  );
};

export default PlanetPage;
