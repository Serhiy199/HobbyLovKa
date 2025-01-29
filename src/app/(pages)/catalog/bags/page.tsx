import React from 'react';
import css from './page.module.css';
import '../../../styles/globals.css';
import CardProducts from '../../../components/cardProducts/card-products';
import { getAllBags } from '../../../../lib/mongoDB/controllers/bags-controllers';
import { productsProps, allProductsProps } from '../../../types/types';
// import { HandBagProps } from '../../../../lib/mongoDB/models/bags-models';
import ServerPagination from '../../../components/serverPagination/server-pagination';

export default async function Bags({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page } = await searchParams;

    const currentPage: number = parseInt(page);

    const { data, totalPage }: allProductsProps = await getAllBags(currentPage);

    return (
        // <section className="section">
        <div className="container">
            <ul className={css.wrapper}>
                {data.map((list: productsProps) => {
                    return <CardProducts key={list._id} listProducts={list} getRequest={'bags'} />;
                })}
            </ul>
            <ServerPagination collection="bags" totalPages={totalPage} currentPage={currentPage} />
        </div>
        // </section>
    );
}
