import React from 'react';

import ReactPaginate from 'react-paginate';

import { Pagination } from '@mui/material';
// import styles from './Pagination.scss';

type PaginationProps = {
  currentPage: number,
  onChangePage: (page: number) => void
}

const CustomPagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <Pagination
      count={2}
      page={currentPage}
      onChange={(event, page) => onChangePage(page)}
      boundaryCount={1}
      color="primary"
      shape="rounded"
      siblingCount={1}
      showFirstButton
      showLastButton
    />
  )
}

export default CustomPagination;