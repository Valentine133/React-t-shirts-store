import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';

const typeNames = ['Man', 'Woman'];

type ProductCardProps = {
  id: string, 
  title: string, 
  price: number, 
  imageUrl: string, 
  sizes: number[], 
  types: number[]
}

const ProductCard: React.FC<ProductCardProps> = ({id, title, price, imageUrl, sizes, types}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    }
    dispatch(addItem(item));
  }

  return (
    <div className="product">
      <Link to={`/t-shirts/${id}`}>
        <img
          className="product__image"
          src={imageUrl}
          alt="T-Shirt"
        />
        <h4 className="product__title">{title}</h4>
      </Link>
      <div className="product__selector">
        <ul>
          {
            types.map((typeId, i) => (
              <li 
                key={typeId}
                onClick={() => setActiveType(i)} 
                className={activeType === i ? 'active' : ''}
                >
                {typeNames[typeId]}
              </li>
            ))
          }
        </ul>
        <ul>
          {
            sizes.map((size, i) => (
              <li 
                key={size}
                onClick={() => setActiveSize(i)} 
                className={activeSize === i ? 'active' : ''}
                >
                {size}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="product__bottom">
        <div className="product__price">{price} €</div>
        <button onClick={onClickAdd} className="button button--outline button--add">
          {/* icon */}
          <span>Add</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div> 
  )
}

export default ProductCard;