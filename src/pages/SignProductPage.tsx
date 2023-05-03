import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SignProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<{
    imageUrl: string,
    title: string,
    price: number
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [])

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`https://643e86fd6c30feced82b58b5.mockapi.io/items/${id}`);
      setProduct(data);
    } catch (error) {
      alert('Error, product not found!');
      navigate('/');
    }
  }

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <>
      <img src={product.imageUrl} alt={product.title} />
      <h1>{product.title}</h1>
      <div>{product.price} €</div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Back</span>
        </button>
      </Link>
    </>
  )
}

export default SignProductPage;