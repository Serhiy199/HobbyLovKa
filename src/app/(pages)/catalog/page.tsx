import React from 'react';
import css from './page.module.css';
import ListProducts from '../../../components/ListProducts/ListProducts';
import '../../../lib/mongoDB/mongodb';
import { getAllHandBags } from '../../../lib/mongoDB/controllers/handBagsControllers';
import { HandBagProps } from '../../../lib/mongoDB/models/handBags';

export default async function Catalog() {
    const data: HandBagProps[] = await getAllHandBags();
    // console.log(data);

    return (
        <ul className={css.wrapper}>
            {data.map((list: HandBagProps) => {
                return <ListProducts key={list._id} listBags={list} />;
            })}
        </ul>
    );
}
