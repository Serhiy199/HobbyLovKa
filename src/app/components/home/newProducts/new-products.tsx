import css from './new-products.module.css';
import CardProducts from '../../cardProducts/card-products';
import { NewProductsProps } from '../../../../lib/mongoDB/models/new-products-models';
import { getAllNewProducts } from '../../../../lib/mongoDB/controllers/new-products-controllers';

export default async function NewProducts() {
    const data: NewProductsProps[] = await getAllNewProducts();

    return (
        <section className={css.block}>
            <h2 className={css.title}>Новинки</h2>
            <ul className={css.wrapper}>
                {data.map((list: NewProductsProps) => {
                    return <CardProducts key={list._id} listProducts={list} />;
                })}
            </ul>
        </section>
    );
}
