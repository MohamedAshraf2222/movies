import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ getPage,totalPages }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        previousLabel="السابق"
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        //   renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center p-3"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="active-link"
      />
    </>
  );
};

export default Pagination;
