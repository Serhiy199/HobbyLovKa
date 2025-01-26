import Image from 'next/image';

import { getOneNewProducts } from '../../../../../lib/mongoDB/controllers/new-products-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    // const { getRequest } = await params;
    const data: productsProps = await getOneNewProducts(id);

    return (
        <div className={css.container}>
            <h2>New products page id</h2>
            <Image width={500} height={500} src={data.images[0]} alt={data.title} />
            <div>
                <h2 className={css.name}>{data.title}</h2>
                {/* <InfoLocation bag={bagData} /> */}
                <h2 className={css.price}>₴ {data.price}.00</h2>
                <p className={css.text}>{data.description}</p>
            </div>
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
