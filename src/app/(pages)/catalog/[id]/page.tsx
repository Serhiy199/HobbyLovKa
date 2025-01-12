import Link from 'next/link';
import { getBagDetailInfo, CatalogProps } from '../../../../lib/api';
import { getOneProduct } from '../../../../lib//mongoDB/controllers/productsControllers';
import { HandBagProps } from '../../../../lib/mongoDB/models/handBags';
import css from './page.module.css';

export default async function Page({ params }: { params: { id: string } }) {

    const data: HandBagProps = await getOneProduct(params.id);

    return (
        <div className={css.container}>
            <section>
                <h2 className={css.name}>{data.title}</h2>
                {/* <InfoLocation bag={bagData} /> */}
                <h2 className={css.price}>€ {data.price}.00</h2>
            </section>
            <section>
                <p className={css.text}>{data.description}</p>
            </section>
            {/* <section>
                <Link className={css.link} href={'features'}>
                    Features
                </Link>
                <Link className={css.link} href={'reviews'}>
                    Reviews
                </Link>
            </section> */}
        </div>
    );
}
