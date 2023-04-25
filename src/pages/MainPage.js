import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage  } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ProductCard from '../components/productCard/ProductCard';
import Skeleton from '../components/productCard/Skeleton';
import Pagination from '../components/Pagination';
import { fetchProducts, selectProducts } from '../redux/slices/productsSlice';
import { selectFilter } from '../redux/slices/filterSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectProducts);
  const sortType = sort.sortProperty;

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  }

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);
  const productsFiltered = items.map((item) => <ProductCard key={item.id}  {...item}/>);

  const getProducts = async () => {

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const categorySort =  categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
  
    dispatch(fetchProducts({
      sortBy,
      order,
      categorySort,
      search,
      currentPage
    }))

    window.scrollTo(0, 0);
  }

  useEffect(() => {
    getProducts();
  }, [categoryId, sortType, searchValue, currentPage]);
  
  return (
    <>
      <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
          <Sort/>
        </div>
        <h2 className="content__title">All products</h2>
        { status === 'error' ? (
          <div className='content__error'>
            <h2>An error occurred</h2>
          </div>
        ) : (
          <div className="content__items">
            {
              status === 'loading'
              ? skeletons
              : productsFiltered
            }
          </div>
        )}
        
        <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </>
  )
}

export default MainPage;