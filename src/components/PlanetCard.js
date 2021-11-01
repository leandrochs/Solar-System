import React from 'react';

class PlanetCard extends React.Component {
  render() {

    const planetName = this.props.planetName;
    const planetImage = this.props.planetImage;

    // console.log(planetName, planetImage);

    return (
      <div data-testid="planet-card">
        <div data-testid="planet-name">{planetName}</div>
        <img src={`${planetImage}`} alt={`Planeta ${planetName}`}></img>
      </div>
    )
  }
}

export default PlanetCard;
