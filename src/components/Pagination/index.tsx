import React from 'react';

import ReactPaginate from 'react-paginate';

// import { Pagination } from '@mui/material';
// import styles from './Pagination.scss';

type PaginationProps = {
  currentPage: number,
  onChangePage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={ 4 }
        pageCount={ 2 }
        forcePage={currentPage - 1}
        previousLabel="< previous"
        renderOnZeroPageCount={null} 
      />
  )
}

export default Pagination;