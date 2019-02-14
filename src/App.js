import React, { Component } from 'react';
import Styled from 'styled-components'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Main>
        <Nav />
        <Jumbotron title={"React(ion) Movies"} />
      </Main>
    );
  }
}

export default App;

const Main = Styled.div`
  margin: 1.5rem;
`