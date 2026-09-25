import  * as React from 'react';
import './App.css';
import CarList from './CarList';
import logo from './logo.svg';


class App extends React.Component<{},any>{

  
render(){
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <CarList/>
    </div>
  );
}
}
export default App;

