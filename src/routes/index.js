import Home from '@/pages/customer/Home';
import Product from '@/pages/customer/Product';
import Account from '@/pages/customer/Account';

export const routes = [
  {
    path: '/',
    component: Product
  },
  {
    path: '/home',
    component: Product
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/admin',
    component: Home
  }
];
