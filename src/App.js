import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Styled from 'styled-components';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import RecentMovieList from './components/RecentMovieList';
import TMDB_SECRET from './keys';

class App extends Component {
  state = {
    "movies": [{"title":"test"},{"title":"test"},{"title":"test"}],
  }

  componentDidMount(){
    console.log(TMDB_SECRET);
  }

  render() {
    return (
      <Main>
        <Nav />
        <Jumbotron title={"React(ion) Movies"} subtitle={"Powered by The Movie Database"} />
        <Router>
          <div>
            <Route exact path='/' component={() => <RecentMovieList movies={this.state.movies} />} />
            {/* <Route exact path='/search' component={} /> */}
            {/* <Route exact path='/saved' component={} /> */}
          </div>
        </Router>
      </Main>
    );
  }
}

export default App;

const Main = Styled.div`
  margin: 1.5rem;
`