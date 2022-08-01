import React from 'react';
import { SolarSystem } from './components';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
