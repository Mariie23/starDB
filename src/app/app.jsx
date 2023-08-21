import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import { PeoplePage, PlanetPage, ShipPage } from "../pages";
import SwapiService from "../services";
import { SwapiProvider } from "../swapiServiceContext";
export default class App extends Component {
  swapiService = new SwapiService();
  render() {
    return (
      <>
        <SwapiProvider value={this.swapiService}>
          <BrowserRouter>
            <Header />
            <RandomPlanet />
            <div className="container">
              <div className="info">
                <Routes>
                  <Route path="/" element={<h1>Welcome to StarDB</h1>} />
                  <Route path="/people/:id?" element={<PeoplePage />} />
                  <Route path="/planets/:id?" element={<PlanetPage />} />
                  <Route path="/ships/:id?" element={<ShipPage />} />
                  <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </SwapiProvider>
      </>
    );
  }
}
