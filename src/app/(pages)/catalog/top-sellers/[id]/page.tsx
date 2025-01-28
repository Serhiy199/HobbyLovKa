import Image from 'next/image';

import { getOneTopSellers } from '../../../../../lib/mongoDB/controllers/top-sellers-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // const { getRequest } = await params;
    const data: productsProps = await getOneTopSellers(id);

    return (
        <div className={css.container}>
            <h2>New TopSellers page id</h2>
            <Image width={500} height={500} src={data.images[0]} alt={data.title} />
            <div>
                <h2 className={css.name}>{data.title}</h2>
                {/* <InfoLocation bag={bagData} /> */}
                <h2 className={css.price}>₴ {data.price}.00 грн</h2>
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
