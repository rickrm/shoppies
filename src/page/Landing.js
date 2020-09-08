import React from 'react'
import style from 'styled-components';

const LandingTitle = style.h1`

  color: white;
  margin: 0;
  font-size: 96px;

  @media only screen and (max-width: 820px) {

    text-align: center;
    font-size: calc(0px + 11.7vw);
    
}

`;
const LandingSub = style.h1`

  color: #F0C453;
  margin: 0;
  font-size: 96px;

  @media only screen and (max-width: 820px) {

    text-align: center;
    font-size: calc(0px + 11.7vw);
    
}

`;

const ShowcaseImage = style.img`

    width: 308px;
    margin-left: 5%;
    height: 711px;

    @media only screen and (max-width: 2560px) {

        margin-left: 15%;
        
    }
    
    @media only screen and (max-width: 1440px) {

        margin-left: 5%;
        
    }

    @media only screen and (max-width: 1333px) {

        width: 242px;
        height: 631px;
        
    }

    @media only screen and (max-width: 820px) {

        margin-left: 0;
        
    }



`;

const TitleWrapper = style.div`

  background-color: #1D1D1D;

`;

const Wrapper = style.div`

    display: flex;
    margin: 0 22vw 0% 22vw;
    margin-top: 79px;

    @media only screen and (max-width: 1110px) {

        margin-left: calc(50px + 10vw);
        
    }
    
    @media only screen and (max-width: 900px) {

        margin-left: calc(0px + 10vw);
        
    }

    @media only screen and (max-width: 820px) {

        flex-direction: column;
        margin-left: 22vw;
        justify-content: center;
        align-items: center;
        text-align: center;

        
    }




`;

export default function Landing() {
    return (
    <Wrapper>
        <TitleWrapper>
            <LandingTitle>
                The Shoppies
            </LandingTitle>
            <LandingSub>
                Everyone's<br/>
                A Critic
            </LandingSub>
        </TitleWrapper>
        <ShowcaseImage src="/images/new_oscar.png"/>
    </Wrapper>
    )
}
