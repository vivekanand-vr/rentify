import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`page-button ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`page-button ${currentPage === 1 ? 'active' : ''}`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(<span key="ellipsis1" className="text-[#446182] mx-[5px] my-0">...</span>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`page-button ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(<span key="ellipsis2" className="text-[#446182] mx-[5px] my-0">...</span>);
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`page-button ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="inline-flex justify-center items-center bg-white p-[5px] rounded-[5px]">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="nav-button">
          Previous
        </button>
        {renderPageNumbers()}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;