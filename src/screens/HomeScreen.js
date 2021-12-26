import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../requests';
import Row from '../Row';


const Homescreen = () => {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner /> 
            <Row  title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row  title="Trending" fetchUrl={requests.fetchTrending} />
            <Row  title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row  title="Romantic Movies" fetchUrl={requests.fetchRomancemovies} />
            <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />            
        </div>
    );
}

export default Homescreen;
