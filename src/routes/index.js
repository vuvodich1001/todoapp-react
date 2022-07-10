import Product from '../pages/Product';
import Home from '../pages/Home';
import Account from '../pages/Account';

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/account',
    component: Account
  }
];
