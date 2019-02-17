import React from 'react';
import Styled from 'styled-components'
import Movie from './Movie';

const MovieList = ({movies}) => {
    
    const renderMovies = movies => movies.map(movie => ( 
            <Movie key={movie.id} movie={movie} />
    )) 

    
    return (
        <List>
            {renderMovies(movies)} 
        </List>
    )
}

export default MovieList;

const List = Styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 1rem;
    justify-content: center;
    grid-gap: 20px;
`