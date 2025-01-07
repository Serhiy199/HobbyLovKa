import React from 'react';
import css from './page.module.css';
import BagsList from '../../../components/bagsList/bagsList';
import '../../../lib/mongoDB/mongodb';
import { getAllHandBags } from '../../../lib/mongoDB/controllers/handBagsControllers';
import User from '../../../lib/mongoDB/models/handBags';
import { CatalogProps } from '../../../lib/mongoDB/controllers/handBagsControllers';

export default async function Catalog() {
    const data: CatalogProps[] = await getAllHandBags();

    return data.map((list: CatalogProps) => {
        return <div key={list._id}>Name:{list.email}</div>;
    });
}
