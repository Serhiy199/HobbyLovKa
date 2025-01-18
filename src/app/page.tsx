// import Link from 'next/link';
// import Button from '../components/button/button';
// import css from './page.module.css';
import Categories from './components/categories/categories';
import TopSellers from './components/topSellers/top-sellers';
import NewProducts from './components/newProducts/new-products';
import HeroPage from './components/hero/hero';

export default function Home() {
    return (
        <>
            <HeroPage />
            <TopSellers />
            <NewProducts />
            <Categories />
        </>
    );
}
