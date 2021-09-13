import React from 'react';
import MyContext from '../context/MyContext';
import Cars from './Cars';

class FatherOfCars extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    }
  }

  handleChange(car, side) {
    this.setState({ cars: {
      ...this.state.cars,
      [car]: side
    } })
  }

  render() {
    const { cars } = this.state;
    const carsStateWithFunc = {
      cars,
      moveCar: this.handleChange,    
    }
    return (
      <MyContext.Provider value={carsStateWithFunc}>
        <Cars />
      </MyContext.Provider>
    )
  }
}

export default FatherOfCars;
