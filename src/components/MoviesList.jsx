import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MoviesList = ({ Movies, getPage, totalPages }) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-center my-3">
        {Movies.length > 0 ? (
          <>
            {Movies.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </>
        ) : (
          <h2>لا يوجد افلام الان </h2>
        )}
      </div>
      {Movies.length > 0 ? (
        <Pagination getPage={getPage} totalPages={totalPages} />
      ) : (
        ""
      )}
    </>
  );
};

export default MoviesList;
