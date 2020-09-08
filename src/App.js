import React from 'react';
import style from 'styled-components';
import Landing from './page/Landing';
import Nominate from './page/Nominate';
import UserList from './page/UserList';

const Wrapper = style.div`

  background-color: #1D1D1D;

`;

const Name = style.p`

  text-align: center;
  color: #fff;

`

const BannerWrapper =  style.div`

  display: flex;
  justify-content: center;

`;


function App() {

  console.log()
  const [nominatedMovies, nominateMovie] = React.useState(JSON.parse(localStorage.getItem("nominatedMovies")) || []);
  const [isLimit, setIsLimit] = React.useState(false);

  React.useEffect(() => {

    localStorage.setItem("nominatedMovies", JSON.stringify(nominatedMovies));
    

    if (nominatedMovies.length === 5) {
        setIsLimit(true);
    } else {
      setIsLimit(false);
    }
  }, [nominatedMovies]);

  const addMovie = (movie) => {

    if (nominatedMovies.length === 4) {
      setIsLimit(true)
      openBanner();
    }

    nominateMovie((prevState) => {

      const copy = JSON.parse(JSON.stringify(prevState));
      copy.push(movie);

      return copy

    });
  }

  const removeMovie = (movie) => {

    nominateMovie((prevState) => {

      let copy = JSON.parse(JSON.stringify(prevState));
      copy = copy.filter((movieCopy) => {
        return movie.imdbID !== movieCopy.imdbID
      });

      return copy

    });
  }
  
  const openBanner = () => {
    var banner = document.getElementById("snackbar");
    banner.className = "show";
    setTimeout(() => { banner.className = banner.className.replace("show", ""); }, 3000);
  }

  

  return (
      <Wrapper>
        <Landing/>
        <Nominate limit={isLimit} addMovie={addMovie} movies={nominatedMovies}/>
        <UserList movies={nominatedMovies} removeMovie={removeMovie}/>
        <BannerWrapper>
          <div id="snackbar"> <span role="img" aria-label="cheers">🙌</span>  Thank you for you nominations</div>
        </BannerWrapper>
        <Name>Made by Ricky Mao</Name>
      </Wrapper>
  );
}

export default App;
