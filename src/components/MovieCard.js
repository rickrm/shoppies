import React from 'react'
import style from 'styled-components';

const Row = style.div`

    display: flex;

`;


const CardWrapper = style.div`

  background-color: #353535;
  position: relative;
  display: inline-block;
  width: 363px;
  margin: 0px;
  border-radius: 12px;
  margin-top: 15px;



`;

const MoviePoster = style.img`

    height: 210px;
    width: 129px;
    border-radius: 12px 0 0 12px;

`

const MovieTitle = style.h1`

  color: white;
  margin: 0;
  font-weight: 600;
  text-align: left;
  font-size: 24px;


`;

const MovieDate = style.h1`

  color: white;
  margin: 0;
  font-weight: 400;
  text-align: left;
  font-size: 16px;


`;

const NominateBtn = style.button`

    border: 0;
    color: #EDB830;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 16px;
    bottom: 13px;
    background-color: transparent;

    &:disabled {
        color: #787363;
    }

    &:active {
        color: #787363;
    }

`;

const RemoveBtn = style.button`

    border: 0;
    color: #E86060;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 16px;
    bottom: 13px;
    background-color: transparent;

    &:active {
        color: #74382A;
    }


    `;

const MovieInfo = style.div`

    display: block;
    margin: 12px 16px 0 12px;

`;

export default function MovieCard({ movie, addMovie, removeMovie, btnLabel, selected, limit }) {

    const [isNominated, setNominate] = React.useState(selected)

    React.useEffect(() => {

        if(selected) {
            setNominate(true);
        } else {
            setNominate(false);
        }

    }, [selected]);

    


    return (
            <CardWrapper>
                <Row>
                    <MoviePoster src={movie.Poster === "N/A" ? "/images/404poster.jpeg" : movie.Poster } alt="Movie_Poster"/>
                    <MovieInfo>
                        <MovieTitle>
                            {movie.Title}
                        </MovieTitle>
                        <MovieDate>
                            {movie.Year}
                        </MovieDate>
                        {
                            btnLabel === "Remove" ?
                            <RemoveBtn onClick={() => { removeMovie(movie);}}>
                                {btnLabel}
                            </RemoveBtn>
                            :
                            <NominateBtn onClick={() => { addMovie(movie); setNominate(true); }} disabled={isNominated || limit}>
                                { isNominated ? "Nominated" : btnLabel }
                            </NominateBtn>
                        }

                    </MovieInfo>
                </Row>
            </CardWrapper>
    )
}
