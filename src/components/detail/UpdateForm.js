import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const UpdateForm = (props) => {
  const [movieId] = useState(props.passMovie.id);
  const [movieName, setMovieName] = useState(props.passMovie.title);

  function updateValue(event) {
    setMovieName(event.target.value);
  }

  const handelUpdate = (event) => {
    event.preventDefault();
    const movieToUpdate = {
      id: movieId,
      title: movieName,
    };
    props.handelUpdateMovie(movieToUpdate);
  };

  return (
    <div>
      <div className="popup-box">
        <div className="box">
          <form>
            <h1>EDIT FORM</h1>
            <span className="close-icon" onClick={props.handleClose}>
              x
            </span>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                placeholder="ID"
                value={movieId}
                onChange={updateValue}
                readOnly
              ></input>
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
            <Button className="btn1" onClick={handelUpdate}>
              Edit movie
            </Button>
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
