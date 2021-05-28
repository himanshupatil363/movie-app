import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchdata();
  }, []);
  function fetchdata() {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error.error));
  }
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const [PER_PAGE, setPER_PAGE] = useState(10);
  const offset = currentPage * PER_PAGE;
  const currentPageData = movies
    .slice(offset, offset + PER_PAGE)
    .map((movie) => <Movie movie={movie} />);

  const pageCount = Math.ceil(movies.length / PER_PAGE);

  return (
    <div className="flex flex-col items-between justify-between min-h-screen">
      <div className="absolute flex justify-center w-full
      ">
        <p className="text-xl">page count: </p>
        <select
          className="text-purple-800 p-2 mx-2 outline-none"
          onChange={(e) => setPER_PAGE(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        {currentPageData}
      </div>
      <div className="">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            " flex bg-gray-600 justify-around md:px-72 items-center h-10"
          }
          pageLinkClassName={"text-white p-3"}
          previousLinkClassName={"text-white"}
          nextLinkClassName={"text-white"}
          disabledClassName={""}
          activeClassName={"bg-purple-600 text-white px-2"}
        />
      </div>
    </div>
  );
};

export default Movies;
