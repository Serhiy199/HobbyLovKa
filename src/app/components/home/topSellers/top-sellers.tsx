import css from './top-sellers.module.css';
import CardProducts from '../../cardProducts/card-products';
import { TopSellersProps } from '../../../../lib/mongoDB/models/top-sellers-models';
import { getAllTopSellers } from '../../../../lib/mongoDB/controllers/top-sellers-controllers';
import '../../../globals.css';

export default async function TopSellers() {
    const data: TopSellersProps[] = await getAllTopSellers();

    return (
        <section className="section">
            <div className="container">
                <h2 className={css.title}>Лідери продажів</h2>
                <ul className={css.wrapper}>
                    {data.map((list: TopSellersProps) => {
                        return (
                            <CardProducts
                                getRequest={'top-sellers'}
                                key={list._id}
                                listProducts={list}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
