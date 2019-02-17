import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Styled from 'styled-components';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieList/MovieDetail';
import API from './utils/api';
import queryString from 'query-string';
class App extends Component {
  state = {
    "movies": [],
  }

  async componentDidMount(){
    const recentMovies = await API.fetchMostRecent();
    console.log(recentMovies);
    this.setState({movies:recentMovies})
  }

  render() {
    return (
      <Main>
        <Nav />
        <Jumbotron title={"React(ion) Movies"} subtitle={"Powered by The Movie Database"} />
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={() => <MovieList movies={this.state.movies} />} />
              <Route exact path='/:id' component={() => <MovieDetail />} />
              {/* <Route exact path='/search' component={} /> */}
              {/* <Route exact path='/saved' component={} /> */}
            </Switch>
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