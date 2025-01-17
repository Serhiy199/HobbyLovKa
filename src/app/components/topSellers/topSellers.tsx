import css from './topSellers.module.css';
import CardProducts from '../cardProducts/card-products';
import { TopSellersProps } from '../../../lib/mongoDB/models/top-sellers';
import ServerPagination from '../serverPagination/serverPagination';
import {
    getAllTopSellers,
    allTopSellersProps,
} from '../../../lib/mongoDB/controllers/top-sellers-controllers';

export default async function TopSellers() {
    const currentTopSellers: number = 1;
    const { data, totalPage }: allTopSellersProps = await getAllTopSellers();

    return (
        <section className={css.list}>
            <h2>Лідери продажів</h2>
            <ul className={css.wrapper}>
                {data.map((list: TopSellersProps) => {
                    return <CardProducts key={list._id} listProducts={list} />;
                })}
            </ul>
            <ServerPagination totalPages={totalPage} currentPage={currentTopSellers} />
        </section>
    );
}
