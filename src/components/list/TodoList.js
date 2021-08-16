/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";

import UpdateForm from "../detail/UpdateForm";

const TodoList = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(false);
  const [passMovie, setPassMovie] = useState();

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";

  useEffect(() => {
    async function fetchMovies() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      axios.get(api).then((response) => setMovies(response.data.results));
    }

    fetchMovies();
  }, []);

  const handleDeleteClick = (movie) => {
    const index = movies.findIndex((x) => x.id === movie.id);
    if (index >= 0) {
      const newData = [...movies];
      newData.splice(index, 1);
      setMovies(newData);
    }
  };

  const handleClose = (event) => {
    event.preventDefault();
    setForm(close);
  };

  const handleUpdateClick = (movie) => {
    setForm(true);
    setPassMovie(movie);
  };

  function handelUpdateMovie(movie) {
    var index = _.findIndex(movies, { id: movie.id });
    var newArr = [...movies];
    newArr.splice(index, 1);
    newArr.splice(index, 0, movie);
    setMovies(newArr);
    setForm(false);
  }

  return (
    <div>
      {form ? (
        <UpdateForm
          passMovie={passMovie}
          handleClose={handleClose}
          handelUpdateMovie={handelUpdateMovie}
        />
      ) : null}
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Name</th>
            <th>Overview</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        {movies.map((movie) => (
          <Slide left key={movie.id}>
            <tbody>
              <tr key={movie.id}>
                <td>
                  <Link to={{ pathname: `/${movie.id}` }}>
                    <img
                      src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                      alt=""
                    ></img>
                  </Link>
                </td>
                <td>{movie.title}</td>
                <td>{movie.overview}</td>
                <td>
                  <Button
                    className="btn1"
                    onClick={() => handleDeleteClick(movie)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn1"
                    onClick={() => handleUpdateClick(movie)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            </tbody>
          </Slide>
        ))}
      </table>
    </div>
  );
};

export default React.memo(TodoList);
