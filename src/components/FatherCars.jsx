import React from 'react';
import MyContext from '../context/MyContext';

class FatherCars extends React.Component {
  constructor(props) {
    super(props);

    this.handleCar = this.handleCar.bind(this)
    this.handleSignal = this.handleSignal.bind(this)

    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signal : {
        color: 'red',
      },
    }
  }

  handleCar(car, side) {
    this.setState({ cars: {
      [car]: side
    } })
  }

  handleSignal(color) {
    this.setState({ signal: {
      color,
    }})
  }

  render() {
    const { cars, signal: { color } } = this.state;
    const { children } = this.props;
    const carsStateWithFunc = {
      cars,
      moveCar: this.handleCar,
      signalColor: color,
      changeSignal: this.handleSignal,
    }
    return (
      <MyContext.Provider value={carsStateWithFunc}>
        {children}
      </MyContext.Provider>
    )
  }
}

export default FatherCars;
