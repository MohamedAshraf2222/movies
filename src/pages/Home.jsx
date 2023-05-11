import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import NavbarCo from "../components/Navbar";
import { items } from "../data.js";
import MoviesList from "../components/MoviesList";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const getAllMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=22feca79c9a9ebc8628da0c1505cea49&language=ar&page=1"
    );
    setAllMovies(movies.data.results);
    setTotalPages(500);
  };
  const getPage = async (pageNum) => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=22feca79c9a9ebc8628da0c1505cea49&language=ar&page=${pageNum}`
    );
    setAllMovies(movies.data.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const sea = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=22feca79c9a9ebc8628da0c1505cea49&query=${word}&language=ar`
      );
      setAllMovies(sea.data.results);
      setTotalPages(sea.data.total_pages);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarCo search={search} />
                <Container >
                  <MoviesList
                    Movies={allMovies}
                    getPage={getPage}
                    totalPages={totalPages}
                  />
                </Container>
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <>
                <NavbarCo search={search} />
                <Container>
                  <MovieDetails />
                </Container>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
