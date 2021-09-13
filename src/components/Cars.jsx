import React from 'react';
import carRed from '../images/carRed.jpeg'
import carBlue from '../images/carBlue.jpeg';
import carYellow from '../images/carYellow.jpeg'
import MyContext from '../context/MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
      {({ cars: { redCar, blueCar, yellowCar }, moveCar}) => (
        <div>
          {console.log(moveCar)}
          <div>
            <img
              className={redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => moveCar('redCar', !redCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => moveCar('blueCar', !blueCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => moveCar('yellowCar', !yellowCar)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Cars;
