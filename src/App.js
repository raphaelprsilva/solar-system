import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import GlobalStyles from './styles/global';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
