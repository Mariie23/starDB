import { withData, withSwapiContext } from "../hoc-helpers";
import ListItem from "../listItem";
const renderName = ({ name }) => <span>{name}</span>;
const mapPeopleMethodToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
const mapPlanetsMethodToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};
const mapShipsMethodToProps = (swapiService) => {
  return { getData: swapiService.getAllStarShips };
};
const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const PeopleList = withSwapiContext(
  withData(withChildFunction(ListItem, renderName)),
  mapPeopleMethodToProps
);
const PlanetList = withSwapiContext(
  withData(withChildFunction(ListItem, renderName)),
  mapPlanetsMethodToProps
);
const StarshipList = withSwapiContext(
  withData(withChildFunction(ListItem, renderName)),
  mapShipsMethodToProps
);

export { PeopleList, PlanetList, StarshipList };
