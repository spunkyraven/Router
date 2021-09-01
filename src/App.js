import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MovieList from "./Componenet/MovieList";
import "./App.css";
import AddMovie from "./Componenet/AddMovie";
import { Container } from "react-bootstrap";
import SerachTitle from "./Componenet/SerachTitle";

import SearchRating from "./Componenet/SearchRating";
import Description from "./Description";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";
function App() {
  let [tabmovies, setTabmovies] = useState([
    {
      title: "Godfather",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1972,
      rating: 3,
      trailer: "https://www.youtube.com/watch?v=UVCP4bKy9Iw",
    },
    {
      title: "Inception",
      imgsrc:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      year: 2010,
      rating: 4,
    },
    {
      title: "300",
      imgsrc:
        "https://resizing.flixster.com/Q3yUH5rCj71Wc2LjYMaEbvSvxGw=/206x305/v2/https://flxt.tmsimg.com/assets/p163191_p_v10_an.jpg",
      year: 2007,
      rating: 2,
    },
    {
      title: "The Matrix",
      imgsrc:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      year: 2005,
      rating: 4,
    },
    {
      title: "Django",
      imgsrc:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt",
      year: 20012,
      rating: 3,
    },
    {
      title: "8miles",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjRFNBNG1AjDMi0P51RjuP8sCBrqV_h71TRBTlYXV9jErIhhG",
      year: 2002,
      rating: 2,
    },
  ]);

  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("");

  let addMovie = (newmovie) => {
    setTabmovies([...tabmovies, newmovie]);
  };

  return (
    <>
      <SerachTitle setSearch={setSearch} />
      <Switch>
        <Route path="/description" component={Description} />
        <Route exact path="/">
          <Container>
            <SearchRating rate={rate} setRate={setRate} />
            <MovieList tabmovies={tabmovies} abc={search} rate={rate} />
            <AddMovie addMovie={addMovie} />
          </Container>
        </Route>
      </Switch>
    </>
  );
}

export default App;
