
import React, { useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCart } from '../redux/slices/cartSlice';
import Search from "./Search";

import { Container, Toolbar, AppBar, Box, Button, Typography } from '@mui/material';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import logoSvg from '../assets/img/logo.svg';

const Header = () => {
  const {items, totalPrice} = useSelector(selectCart);
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <AppBar position="sticky" className="header">
      <Container>
        <Toolbar>
          <Link to="/">
            <Typography className="header__logo">
              <img width="38" src={logoSvg} alt="T-Shirts logo" />
              <Box sx={{ display: { xs: 'none', md: 'inline-block' } }}>
                <Typography variant="h1">React T-Shirts</Typography>
                <Typography variant="subtitle1">creative t-shirts on different topics</Typography>
              </Box>
            </Typography>
          </Link>
          <Search/>
          <Box sx={{ flexGrow: 1 }} />
          <Box className="header__cart">
            <Button component={Link} to="/cart">
              <span>{totalPrice} <EuroSymbolIcon/></span>
              <div className="button__delimiter"></div>
              <span><LocalMallIcon /> {totalCount}</span>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;