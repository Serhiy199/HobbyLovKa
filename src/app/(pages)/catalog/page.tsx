import React from 'react';
import css from './page.module.css';
import BagsList from '../../../components/bagsList/bagsList';
import { getCatalog, dataProps, CatalogProps } from '../../../lib/api';
import '../../../lib/mongoDB/mongodb';
import User from '../../../lib/mongoDB/models/handBags';

export default async function Catalog() {
    // const res = await fetch('http://localhost:3000/api/handBags');
    // console.log(res.body);

    // const { data } = await res.json();
    // console.log(data);
    // return res.map(list => {
    //     return <span>Name:{list.name}</span>;
    // });
    // return (
    //     <div>
    //         <h1>Fetched Data:</h1>
    //         <pre>{JSON.stringify(res, null, 2)}</pre>
    //     </div>
    // );
    try {
        const data = await User.find();
        console.log(data);
        // Чекаємо виконання промісу
        return data.map(list => {
            return <div key={list._id}>Name:{list.email}</div>;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Error loading data</div>;
    }
    // try {
    //     const arrContacts = await User.find();
    //     console.log(arrContacts);
    // } catch (error) {
    //     console.log(error);
    // }

    // res.json(arrContacts);

    // const { items }: dataProps = await getCatalog();

    // return (
    //     <ul className={css.catalog}>
    //         {items.map((list: CatalogProps, index: number): React.ReactNode => {
    //             return <BagsList key={index} {...list} />;
    //         })}
    //     </ul>
    // );
}
