import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

import Spinner from "../loading/Spinner";

const TodoList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const POSTER_SIZE = "w200";

  useEffect(() => {
    setLoading(true);

    async function fetchMovies() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await fetch(api);
      const responseJSON = await response.json();
      setMovies(responseJSON.results);
    }

    fetchMovies();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Poster</th>
              <th>Name</th>
              <th>Overview</th>
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
                </tr>
              </tbody>
            </Slide>
          ))}
        </table>
      )}
    </div>
  );
};

export default React.memo(TodoList);
