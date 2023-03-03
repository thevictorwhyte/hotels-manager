import Hotels from './pages/hotels';
import Categories from './pages/categories';
import HotelIcon from '@mui/icons-material/Hotel';
import CategoryIcon from '@mui/icons-material/Category';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: (props: any) => JSX.Element;
  icon: any;
}

export const routes: Route[] = [
  {
    key: 'hotels',
    title: 'Hotels',
    path: '/',
    enabled: true,
    component: Hotels,
    icon: HotelIcon,
  },
  {
    key: 'categories',
    title: 'Categories',
    path: '/categories',
    enabled: true,
    component: Categories,
    icon: CategoryIcon,
  },
];
