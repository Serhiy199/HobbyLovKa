'use client';
import Link from 'next/link';
import { use } from 'react';
import { getBagDetailInfo, CatalogProps } from '../../../../lib/api';
import { useState, useEffect } from 'react';
import InfoLocation from '../../../../components/InfoLocation/InfoLocation';

import css from './page.module.css';

export default function Page({ params }: { params: Promise<{ id: string }> }): React.ReactNode {
    const { id } = use(params);

    const [bagData, setBagData] = useState<Partial<CatalogProps>>({});

    useEffect(() => {
        async function getBagInfo() {
            if (!id) return;

            const data: CatalogProps = await getBagDetailInfo(id);

            setBagData(data);
        }
        getBagInfo();
    }, [id]);

    return (
        <div className={css.container}>
            <section>
                <h2 className={css.name}>{bagData.name}</h2>
                <InfoLocation bag={bagData} />
                <h2 className={css.price}>€ {bagData.price}.00</h2>
            </section>
            <section>
                <p className={css.text}>{bagData.description}</p>
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
