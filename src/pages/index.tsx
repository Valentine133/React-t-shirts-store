import Loadable from 'react-loadable';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './Cart'),
  loading: () => <div>Loading...</div>,
});

const MainPage = Loadable({
  loader: () => import(/* webpackChunkName: "MainPage" */ './MainPage'),
  loading: () => <div>Loading...</div>,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ './NotFound'),
  loading: () => <div>Loading...</div>,
});

const SignProductPage = Loadable({
  loader: () => import(/* webpackChunkName: "SignProductPage" */ './SignProductPage'),
  loading: () => <div>Loading...</div>,
});

export { Cart, MainPage, NotFound, SignProductPage };