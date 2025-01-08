import React from 'react';
// import css from './page.module.css';
// import BagsList from '../../../components/bagsList/bagsList';
import '../../../lib/mongoDB/mongodb';
import { getAllHandBags } from '../../../lib/mongoDB/controllers/handBagsControllers';
import { HandBagProps } from '../../../lib/mongoDB/models/handBags';

export default async function Catalog() {
    const data: HandBagProps[] = await getAllHandBags();
    // console.log(data);

    return data.map((list: HandBagProps) => {
        return <div key={list._id}>Name:{list.title}</div>;
    });
}
