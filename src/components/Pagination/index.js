import ReactPaginate from 'react-paginate';

// import { Pagination } from '@mui/material';
// import styles from './Pagination.scss';

const Pagination = ({ currentPage, onChangePage }) => {
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