import React from 'react'
import SearchList from '../components/SearchList';
import config from '../config.json';
import style from 'styled-components';

const request = require('request');

const NominateTitle = style.h1`

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

const Form = style.input`

    width: 100%;
    height: 31px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    background-color: transparent;
    margin-top: 16px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2.5px solid white;

    &::placeholder {
        font-size: 18px;
        color: #E3E3E3;
        font-weight: 400;
    }

    &:focus {
        border-bottom: 2.5px solid #F0C453;
    }

`;

const Form2 = style.input`

    width: 33%;
    height: 31px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    background-color: transparent;
    margin-top: 16px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2.5px solid white;

    &::placeholder {
        font-size: 18px;
        color: #E3E3E3;
        font-weight: 400;
    }

    &:focus {
        border-bottom: 2.5px solid #F0C453;
    }

`;

const Wrapper = style.div`

  margin: 10.21% 22% 5.07% 22%;

`;


export default function Nominate({ addMovie, movies, limit }) {

    const [searchInput, setInput] = React.useState("");
    const [yearInput, setYearInput] = React.useState("");
    const [searchOutput, setOuput] = React.useState([]);
    const [pageCount, setPages] = React.useState(0);
    const [currPage, setCurrPage] = React.useState(1);

    React.useEffect(() => {

        if(searchInput.length <= 2) {
            request(`https://www.omdbapi.com/?t=${searchInput}&apikey=${config.key}&page=1&type=movie&r=json&y=${yearInput}`, { json: true }, (err, res, body) =>  {
                if (body.Response === "False") {
                    setOuput([]);
                    if (searchInput.length !== 0) {
                        setPages(-1);
                    }
                    return
                }
                const currMovies = [body];
                setPages(1)
                setOuput(currMovies)
            });

        } else {
            request(`https://www.omdbapi.com/?s=${searchInput}&apikey=${config.key}&page=${currPage}&y=${yearInput}&type=movie&r=json`, { json: true }, (err, res, body) =>  {
                if (body.Response === "False") {
                    setOuput([]);
                    setPages(-1);
                    return
                }
            
                const movieCount = body.totalResults;
                const currMovies = body.Search;
    
                setPages(Math.floor(movieCount/10) + 1);
                setOuput(currMovies);
    
    
            });
        }

    }, [searchInput, currPage, yearInput]);

    const handleNextPage = () => {
        setCurrPage((prev) => prev += 1);
    }

    const handleBackPage = () => {
        setCurrPage((prev) => prev -= 1);
    }

    const handleChange =(e) => {
        setCurrPage(1);
        setInput(e.target.value);
    }

    const handleYearChange =(e) => {
        setCurrPage(1);
        setYearInput(e.target.value);
    }
    return (
        <Wrapper>
            <NominateTitle>
                Start Nominating
            </NominateTitle>
            <Form placeholder=" 🔍 Search for the film title (or not, it's up to you)" onChange={handleChange}/>
            <Form2 placeholder=" 📅 Enter year of film (optional)" onChange={handleYearChange}/>
            <SearchList 
            date={yearInput}
            limit={limit}
            input={searchInput}
            currPage={currPage}
            goNextPage={handleNextPage} 
            goBackPage ={handleBackPage}
            pages={pageCount} 
            addMovie={addMovie} 
            movies={searchOutput} 
            nominates={movies}/>
        </Wrapper>
    );
}
