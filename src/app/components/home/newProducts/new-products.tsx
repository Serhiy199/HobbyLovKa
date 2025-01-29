import css from './new-products.module.css';
import CardProducts from '../../cardProducts/card-products';
import { productsProps } from '../../../types/types';
import { getAllNewProducts } from '../../../../lib/mongoDB/controllers/new-products-controllers';
import '../../../styles/globals.css';

export default async function NewProducts() {
    const data: productsProps[] = await getAllNewProducts();

    return (
        <section className={`${css.section} section`}>
            <div className="container">
                <h2 className={css.title}>Новинки</h2>
                <ul className={css.wrapper}>
                    {data.map((list: productsProps) => {
                        return (
                            <CardProducts
                                key={list._id}
                                listProducts={list}
                                getRequest={'new-products'}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
