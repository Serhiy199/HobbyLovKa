import React from 'react';
import css from './page.module.css';
import ListProducts from '../../../components/ListProducts/ListProducts';
import {
    getAllProducts,
    allProductsProps,
} from '../../../lib/mongoDB/controllers/productsControllers';
import { HandBagProps } from '../../../lib/mongoDB/models/handBags';
import ServerPagination from '../../../components/serverPagination/serverPagination';

export default async function Catalog({ searchParams }: { searchParams: { page: string } }) {
    const { page }: { page: string } = await searchParams;

    const currentPage: number = parseInt(page);

    const { data, totalPage }: allProductsProps = await getAllProducts(currentPage);

    return (
        <div>
            <ul className={css.wrapper}>
                {data.map((list: HandBagProps) => {
                    return <ListProducts key={list._id} listBags={list} />;
                })}
            </ul>
            <ServerPagination totalPages={totalPage} currentPage={currentPage} />
        </div>
    );
}
