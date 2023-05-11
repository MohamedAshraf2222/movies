import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovieDetails = async () => {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=22feca79c9a9ebc8628da0c1505cea49&language=ar`
    );
    setMovie(movie.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="movieImg"
            />
            <div className="justify-content-center text-center mx-auto">
                <p className="card-text-details border-bottom">
                    اسم الفيلم : {movie.title}
                </p>
                <p className="card-text-details border-bottom">
                    تاريخ الفيلم : {movie.release_date}
                </p>
                <p className="card-text-details border-bottom">
                    عدد المقيمين : {movie.vote_count}
                </p>
                <p className="card-text-details border-bottom">
                    التقييم : {movie.vote_average}
                </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex align-items-start flex-column">
            <div className="text-end p-4">
                <p className="card-text-title border-bottom">
                    القصة :
                </p>
            </div>
            <div className="text-end px-2">
                <p className="card-text-story">
                    {movie.overview}
                </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
        <Link to={'/'}>
            <button className="btn btn-primary mx-2 btn-bg">
                عودة للصفحة الرئيسية
            </button>
        </Link>
        {movie.homepage != '' ?
        
        <a  href={movie.homepage}>
            <button className="btn btn-primary mx-2 btn-bg">
                مشاهدة الفيلم
            </button>
        </a> 
            :''}
        </Col>
      </Row>

    </div>
  );
};

export default MovieDetails;
