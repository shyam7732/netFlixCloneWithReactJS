import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import NavBar from './NavBar'

function Home() {
  return (
    <>
        <NavBar />
        <Banner />
        <Row endPoint ={requests.fetchNetflixOriginals} heading = 'Netflix Original' isBigger={true} />
        <Row endPoint ={requests.fetchTrending} heading = 'Tranding Now' />
        <Row endPoint ={requests.fetchTopRated} heading = 'Top Rated' />
        <Row endPoint ={requests.fetchActionMovies} heading = 'Action Movies' />
        <Row endPoint ={requests.fetchComedyMovies} heading = 'Comedy Movies' />
        <Row endPoint ={requests.fetchHorrorMovies} heading = 'Horror Movies' />
        <Row endPoint ={requests.fetchRomanceMovies} heading = 'Romantic Movies' />
        <Row endPoint ={requests.fetchDocumentaries} heading = 'Documentaries' />
    </>
    
  )
}

export default Home


