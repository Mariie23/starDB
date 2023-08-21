import React, { Component } from "react";
import "./randomPlanet.css";
import SwapiService from "../services";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

export default class RandomPlanet extends Component {
  swapi = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };
  constructor() {
    super();
    setInterval(() => this.updatePlanet(), 10000);
  }
  onLoadPlanet = (planet) => this.setState({ planet, loading: false });
  onError = () => this.setState({ error: true, loading: false });

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanetById(id).then(this.onLoadPlanet).catch(this.onError);
  }
  render() {
    const { planet, loading, error } = this.state;
    return (
      <div className="container">
        <div className="card">
          {loading ? (
            <Spinner />
          ) : error ? (
            <ErrorMessage />
          ) : (
            <PlanetView planet={planet} />
          )}
        </div>
      </div>
    );
  }
}
const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img
        className="card_img"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />
      <div className="card_body">
        <div className="card_title planet_name">{name}</div>
        <div className="card_text">
          <p className="planet_info">Population: {population}</p>
          <p className="planet_info">Rotation period: {rotationPeriod}</p>
          <p className="planet_info">Diameter: {diameter}</p>
        </div>
      </div>
    </>
  );
};
