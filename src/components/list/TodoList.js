import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w200";

const TodoList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await fetch(api);
      const responseJSON = await response.json();
      setMovies(responseJSON.results);
    }

    fetchMovies();
  }, []);

  function handleClick(movie) {
    const index = movies.findIndex((x) => x.id === movie.id);
    if (index >= 0) {
      const newData = [...movies];
      newData.splice(index, 1);
      setMovies(newData);
    }
  }

  return (
    <div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Overview</th>
          </tr>
        </thead>
        {movies.map((movie) => (
          <Slide left key={movie.id}>
            <tbody>
              <tr key={movie.id} onClick={() => handleClick(movie)}>
                <td>
                  <img
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                    alt=""
                  />
                </td>
                <td>{movie.title}</td>
                <td>{movie.overview}</td>
              </tr>
            </tbody>
          </Slide>
        ))}
      </table>
    </div>
  );
};

export default React.memo(TodoList);
