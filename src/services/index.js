export default class SwapiService {
  _baseURL = "https://swapi.dev/api"
  _imgBase = "https://starwars-visualguide.com/assets/img"

  async getResponse(url) {
    try {
      const resp = await fetch(this._baseURL + url)
      const data = await resp.json()
      return data
    } catch (err) {
      console.error("Error!", err)
    }
  }
  getAllPeople = async () => {
    const data = await this.getResponse("/people/")
    return data.results.map((person) => this._transformPeople(person))
  }
  getPeopleById = async (id) => {
    const person = await this.getResponse(`/people/${id}/`)
    return this._transformPeople(person)
  }
  getAllStarShips = async () => {
    const data = await this.getResponse("/starships/")
    return data.results.map((ship) => this._transformShip(ship))
  }
  getStarsShipById = async (id) => {
    const ship = await this.getResponse(`/starships/${id}/`)
    return this._transformShip(ship)
  }
  getAllPlanets = async () => {
    const data = await this.getResponse("/planets")
    return data.results.map((planet) => this._transformPlanet(planet))
  }
  getPlanetById = async (id) => {
    const planet = await this.getResponse(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  getPersonImg = (id) => `${this._imgBase}/characters/${id}.jpg`
  getStarshipImg = (id) => `${this._imgBase}/starships/${id}.jpg`
  getPlanetImg = (id) => `${this._imgBase}/planets/${id}.jpg`

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }
  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }
  _transformShip = (ship) => {
    return {
      id: this._extractId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
    }
  }
  _transformPeople = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}
