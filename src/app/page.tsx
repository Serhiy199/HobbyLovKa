// import Link from 'next/link';
// import Button from '../components/button/button';
// import css from './page.module.css';
import Categories from './components/categories/categories';
import TopSellers from './components/topSellers/topSellers';
import NewGoods from './components/newGoods/newGoods';
import HeroPage from './components/hero/hero';

export default function Home() {
    return (
        <>
            <HeroPage />
            <TopSellers />
            <NewGoods />
            <Categories />
        </>
    );
}
