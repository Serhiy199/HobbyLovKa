import React from 'react';
import css from './page.module.css';
import '../../styles/globals.css';
import CardProducts from '../../components/cardProducts/card-products';
import {
    getAllProducts,
    allProductsProps,
} from '../../../lib/mongoDB/controllers/products-controllers';
import { productsProps } from '../../types/types';
import ServerPagination from '../../components/serverPagination/server-pagination';
import Search from '@/app/components/search/search';

export default async function Catalog(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    // const { page } = await searchParams;

    const { data, totalPage }: allProductsProps = await getAllProducts(query, currentPage);

    return (
        // <section className="section">
        <div className="container">
            <div className={css.search}>
                <Search placeholder="Search for products..." />
            </div>
            <ul className={css.wrapper}>
                {data.map((list: productsProps) => {
                    return <CardProducts getRequest={'bags'} key={list._id} listProducts={list} />;
                })}
            </ul>
            <ServerPagination totalPages={totalPage} currentPage={currentPage} />
        </div>
        // </section>
    );
}
