import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import { MoviePoster } from '../Movie';
import API from '../../../utils/api';

class MovieDetail extends Component{
    state = {
        movies:[],
        movie:{}
    }

    async componentDidMount(){
        const id = window.location.pathname.split("/")[1]
        const movie = await API.fetchMovie(id);
        this.setState({movie:movie});
    }
    
    
    render(){
        const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
        const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
        const {movie} = this.state;

        return (
            <MovieDiv backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Overdrive id={movie.id}>
                        <MoviePoster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>
                </MovieInfo>
            </MovieDiv>
        )
    }
}

export default MovieDetail;

const MovieDiv = Styled.div`
    position:relative;
    padding-top:50vh;
    background-size:cover;
    background:url(${props => props.backdrop}) no-repeat;
`

const MovieInfo = Styled.div`
    background:white;
    text-align:left;
    padding:2rem 10%;
    display:flex;
    > div
        {
            margin-left:20px;
        }
    img
        {
            position:relative;
            top:5px;
        }
`