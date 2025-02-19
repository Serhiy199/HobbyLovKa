import React from 'react';
import css from './page.module.css';
import '../../../styles/globals.css';
import CardProducts from '../../../components/card-products/card-products';
import { getAllBags } from '../../../../lib/mongoDB/controllers/bags-controllers';
import { productsProps, allProductsProps } from '../../../types/types';
// import { HandBagProps } from '../../../../lib/mongoDB/models/bags-models';
import ServerPagination from '../../../components/pagination/pagination';
import Search from '../../../components/search/search';

export default async function Bags(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const { data, totalPage }: allProductsProps = await getAllBags(query, currentPage);

    if (!data || data.length === 0) {
        return (
            <div className="container">
                <div className={css.search}>
                    <Search placeholder="Search for products..." />
                </div>
                <p>
                    Шановний клієнте, на жаль такого товару не знайдемо, але в нас широкий вибір
                    асортиментів, ми впевнені що Ви знайдете потрібний!!!
                </p>
                <ServerPagination totalPages={totalPage} />
            </div>
        );
    }

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
            <ServerPagination totalPages={totalPage} />
        </div>
        // </section>
    );
}
