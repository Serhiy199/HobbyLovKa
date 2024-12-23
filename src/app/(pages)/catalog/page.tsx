import React from 'react';
import css from './page.module.css';
import BagsList from '../../../components/bagsList/bagsList';
import { getCatalog, dataProps, CatalogProps } from '../../../lib/api';

export default async function Catalog() {
    const { items }: dataProps = await getCatalog();

    return (
        <ul className={css.catalog}>
            {items.map((list: CatalogProps, index: number): React.ReactNode => {
                return <BagsList key={index} {...list} />;
            })}
        </ul>
    );
}
