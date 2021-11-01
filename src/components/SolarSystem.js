import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {

    const cards = planets.map(({name, image}) => <PlanetCard key={name} planetName={name} planetImage={image} />);

    return (
      <>
        <div data-testid="solar-system"></div>
        <Title headline="Planetas" />
        <div>{cards}</div>
      </>
    );
  }
}

export default SolarSystem;
