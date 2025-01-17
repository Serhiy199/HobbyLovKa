// import React from 'react';
import css from './page.module.css';
import CardProducts from '../../components/cardProducts/card-products';
import {
    getAllProducts,
    allProductsProps,
} from '../../../lib/mongoDB/controllers/products-controllers';
import { HandBagProps } from '../../../lib/mongoDB/models/hand-bags';
import ServerPagination from '../../components/serverPagination/serverPagination';

export default async function Catalog({ searchParams }: { searchParams: { page: string } }) {
    const { page }: { page: string } = await searchParams;

    const currentPage: number = parseInt(page);

    const { data, totalPage }: allProductsProps = await getAllProducts(currentPage);

    return (
        <section>
            <ul className={css.wrapper}>
                {data.map((list: HandBagProps) => {
                    return <CardProducts key={list._id} listProducts={list} />;
                })}
            </ul>
            <ServerPagination totalPages={totalPage} currentPage={currentPage} />
        </section>
    );
}
