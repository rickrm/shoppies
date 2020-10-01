import React from 'react';
import style from 'styled-components';
import MovieCard from '../components/MovieCard';

const SearchWrapper = style.div`

    margin-top: 23px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


`;

const BtnWrapper = style.div`

    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    margin-top: 35px;


`

const PageBtnLeft = style.button`

    height: 30px;
    width: 30px;
    color: white;
    background-color: transparent;
    border-color: transparent;
    background-size: cover;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 500;


    &:active {

        color: grey;
        background-size: cover;
    }

`;

const PageBtnRight = style.button`

    height: 30px;
    width: 30px;
    color: white;
    background-color: transparent;
    border-color: transparent;
    background-size: cover;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 500;

    &:active {
        color: grey;
        background-size: cover;
    }

`;

const ErrorLabel = style.p`


    margin: 0;
    text-align: center;
    color: white;
    font-size: 24px;


`;

const PageNum = style.p`


    margin: 0;
    font-weight: bold;
    text-align: center;
    color: white;
    margin: 0 8px;
    font-size: 24px;


`;

const Note = style.p`

    font-size: 16px;
    color: white;
    font-weight: 400;
    margin: 0;
    margin-top: 21px;
`;



export default function SearchList(
    { 
    movies, 
    addMovie, 
    nominates, 
    pages, 
    goNextPage, 
    goBackPage, 
    currPage, 
    input, 
    limit,
    date }) {


    const onClickLeft = () => {
        goBackPage();

    }

    const onClickRight = () => {
        goNextPage();
    }

    return (
    <>
    <Note>* If a movie doesn't show up, try refining the search by entering the year!</Note>
        {
                    pages === 1 || pages === 0 ? null : 
                    <BtnWrapper>
                        {
                            currPage === 1 ? null :
                            <PageBtnLeft onClick={onClickLeft}>
                                {"<"}
                            </PageBtnLeft>
                        }
                        { pages === -1 || input.length === 0 ? null : <PageNum>{currPage}</PageNum> }
                        {
                            currPage === pages || currPage === 100 || pages === -1 || input.length === 0 ? null:
                            <PageBtnRight onClick={onClickRight}>
                                {">"}
                            </PageBtnRight>
                        }
                    </BtnWrapper>
        }

        <SearchWrapper>
                {
                    pages === -1 && input.length !== 0 ? 
                    <ErrorLabel>
                    { date.length === 0 ? `Results for "${input}" not found 😢` 
                    : `Results for "${input}" (${date}) not found 😢` }
                    </ErrorLabel> :
                    movies.map((movie) => {

                        let isNominated = false;

                        for(const nominate in nominates) {
                            if (nominates[nominate].imdbID === movie.imdbID) {
                                isNominated = true
                            } 
                        }
                        return <MovieCard key={movie.imdbID} limit={limit} btnLabel={!limit ? "Nominate": "List Filled"} selected={isNominated} addMovie={addMovie} movie={movie}/>
                    })
                }

        </SearchWrapper>
        {
                    pages === 1 || pages === 0 ? null : 
                    <BtnWrapper>
                        {
                            currPage === 1 ? null :
                            <PageBtnLeft onClick={onClickLeft}> {"<"} </PageBtnLeft>
                        }
                        { pages === -1 || input.length === 0 ? null : <PageNum>{currPage}</PageNum> }
                        {
                            currPage === pages || currPage === 100 || pages === -1 || input.length === 0 ? null:
                            <PageBtnRight onClick={onClickRight}>
                                {">"}
                            </PageBtnRight>
                        }
                    </BtnWrapper>
        }
    </>
    )
}
