import React, { useState, useEffect } from 'react';
import GiphyImage from './GiphyImage';
//import './App.css';
import logo from './logo.svg';

interface Car {
  id: number;
  name: string;
}

const CarList: React.FC = () => {

  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:8080/cool-cars')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
      
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <div>
        <h2>Car List</h2>
        {cars.map((car: Car) => (
          <div key={car.id}>
            {car.name} <br/>
            <GiphyImage name={car.name}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;

