import React from 'react';
import style from 'styled-components';
import MovieCard from '../components/MovieCard';

const ListTitle = style.h1`

  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 48px;
  margin-bottom: 73px;

  @media only screen and (max-width: 820px) {

    text-align: center;
    font-size: calc(0px + 5.85vw);
    
}

`;

const ListSub = style.p`

    font-size: 18px;
    text-align: left;
    color: #fff;
    font-weight: 400;


`;

const Wrapper = style.div`

    margin: 10.21% 22% 5.07% 22%;

`;

const NominateWrapper = style.div`

    margin-top: 33px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


`;

export default function UserList({ movies, removeMovie }) {
    return (
        <Wrapper>
            <ListTitle>
                My List
            </ListTitle>
            <ListSub>
                Your 5 nominations will happily reside here. <br/> 
                Don't worry there are snacks and drinks 🍔 🍿 🍻 down here for them, <br/>
                while you nominate all 5 to fill your list:
            </ListSub>
            <NominateWrapper>
                {
                    movies.map((movie) => {
                        return <MovieCard key={movie.imdbID} removeMovie={ removeMovie } btnLabel={"Remove"} movie={movie}/>
                    })
                }
            </NominateWrapper>
        </Wrapper>
    )
}
