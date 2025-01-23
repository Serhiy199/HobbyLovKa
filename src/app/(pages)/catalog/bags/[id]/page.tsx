import Image from 'next/image';

import { getOneBag } from '../../../../../lib/mongoDB/controllers/bags-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // const { getRequest } = await params;
    const data: productsProps = await getOneBag(id);

    return (
        <div className={css.container}>
            <Image width={320} height={360} src="/photo_шопер_котик.jpg" alt={data.title} />
            <div>
                <h2 className={css.name}>{data.title}</h2>
                {/* <InfoLocation bag={bagData} /> */}
                <h2 className={css.price}>€ {data.price}.00</h2>
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
