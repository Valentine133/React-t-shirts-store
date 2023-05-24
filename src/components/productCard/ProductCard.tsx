import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2'; 

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
    <Grid sm={6} md={3}>
      <Card className="product">
        <CardActionArea>
          <Link to={`/t-shirts/${id}`}>
            <img
              className="product__image"
              src={imageUrl}
              alt="T-Shirt"
            />
            <Typography gutterBottom variant="h5" component="div" className="product__title">{title}</Typography>
          </Link>
        </CardActionArea>
        <CardContent>
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
            <Button variant="contained" color="primary" onClick={onClickAdd} className="button--add">
              {/* icon */}
              <span>Add</span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </Button>
          </div>
        </CardContent>
      </Card> 
    </Grid>
  )
}

export default ProductCard;