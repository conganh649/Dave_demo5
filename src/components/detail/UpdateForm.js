import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UpdateForm = (props) => {
  const [movieId] = useState(props.passMovie.id);
  const [movieName, setMovieName] = useState(props.passMovie.title);
  const [overview, setOverview] = useState(props.passMovie.overview);
  const [movie, setMovie] = useState(props.passMovie);

  function updateValue(event) {
    setMovieName(event.target.value);
  }

  useEffect(() => {
    setMovie((prevState) => ({
      ...prevState,
      title: movieName,
    }));
  }, [movieName]);

  useEffect(() => {
    setMovie((prevState) => ({
      ...prevState,
      overview: overview,
    }));
  }, [overview]);

  function updateValue1(event) {
    setOverview(event.target.value);
  }

  const handelUpdate = (event) => {
    event.preventDefault();
    props.handelUpdateMovie(movie);
  };

  return (
    <div>
      <div className="popup-box">
        <div className="box">
          <h1 onClick={handelUpdate}>Click to Update</h1>
          <form>
            <span className="close-icon" onClick={props.handleClose}>
              x
            </span>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                name="ID"
                placeholder="Movie ID"
                value={movieId}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Movie Name"
                value={movieName}
                onChange={updateValue}
              />
            </div>
            <div className="form-group">
              <label>Overview</label>
              <textarea
                placeholder="Movie "
                value={overview}
                onChange={updateValue1}
                cols="60"
                rows="7"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateForm.propTypes = {
  passMovie: PropTypes.object,
  handleClose: PropTypes.func,
  handelUpdateMovie: PropTypes.func,
};

export default UpdateForm;
