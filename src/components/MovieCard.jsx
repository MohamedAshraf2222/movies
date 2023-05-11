import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col xs="6" sm="6" lg="3" md="4" className="my-1 card-wrapper">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="card image"
          className="card-image"
        />
        <div className="card">
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>اسم الفيلم : {movie.original_title}</p>
              <p>تاريخ الاصدار : {movie.release_date}</p>
              <p>عدد المقيمين : {movie.vote_count}</p>
              <p>التقييم : {movie.vote_average}</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
