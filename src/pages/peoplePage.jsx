import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PersonDetails } from "../swComponents";
import { PeopleList } from "../swComponents";

const PeoplePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSelectItem = (id) => navigate(`/people/${id}`);
  return (
    <>
      <PeopleList onSelectItem={handleSelectItem} />
      {id && <PersonDetails itemId={id} />}
    </>
  );
};

export default PeoplePage;
