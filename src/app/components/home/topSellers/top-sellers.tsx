import css from './top-sellers.module.css';
import CardProducts from '../../cardProducts/card-products';
import { productsProps } from '../../../types/types';
import { getAllTopSellers } from '../../../../lib/mongoDB/controllers/top-sellers-controllers';
import '../../../styles/globals.css';

export default async function TopSellers() {
    const data: productsProps[] = await getAllTopSellers();

    return (
        <section className="section">
            <div className="container">
                <h2 className={css.title}>Лідери продажів</h2>
                <ul className={css.wrapper}>
                    {data.map((list: productsProps) => {
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
