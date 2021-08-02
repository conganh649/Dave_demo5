import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilmDetail = (props) => {
  const [movie, setMovie] = useState();
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  const BACKDROP_SIZE = "w1280";
  const POSTER_SIZE = "w500";

  useEffect(() => {
    async function fetchMovie() {
      const API_URL = "https://api.themoviedb.org/3/";
      const API_KEY = "405186b5458e6a03edaf4627d2589da0";
      const api = `${API_URL}movie/${props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
      const response = await fetch(api);
      const responseJSON = await response.json();
      setMovie(responseJSON);
    }

    fetchMovie();
  }, []);

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="get-back">
          <h2>Get Back</h2>
        </div>
      </Link>

      {movie ? (
        <div
          className="movie-cover"
          style={{
            background: movie.backdrop_path
              ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`
              : "#000",
          }}
        >
          <div className="movie-content">
            <div className="movie-poster">
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              ></img>
            </div>
            <div className="movie-content-text">
              <h1>{movie.original_title}</h1>
              <h2>PLOT</h2>
              <p>{movie.overview}</p>
              <h2>HOMEPAGE</h2>
              <p>{movie.homepage === "" ? "Not available" : movie.homepage}</p>
              <h2>STATUS</h2>
              <p>{movie.status}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

FilmDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }),
};

export default FilmDetail;
