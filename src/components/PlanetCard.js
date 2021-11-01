import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    console.log(typeof planetName);

    return (
      <div key={ planetName } data-testid="planet-card">
        <div data-testid="planet-name">{planetName}</div>
        <img src={ `${planetImage}` } alt={ `Planeta ${planetName}` }></img>
      </div>
    );
  }
}

export default PlanetCard;
