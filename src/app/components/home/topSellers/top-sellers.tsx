import css from './top-sellers.module.css';
import CardProducts from '../../cardProducts/card-products';
import { TopSellersProps } from '../../../../lib/mongoDB/models/top-sellers-models';
import { getAllTopSellers } from '../../../../lib/mongoDB/controllers/top-sellers-controllers';

export default async function TopSellers() {
    const data: TopSellersProps[] = await getAllTopSellers();

    return (
        <section className={css.block}>
            <h2 className={css.title}>Лідери продажів</h2>
            <ul className={css.wrapper}>
                {data.map((list: TopSellersProps) => {
                    return <CardProducts key={list._id} listProducts={list} />;
                })}
            </ul>
        </section>
    );
}
