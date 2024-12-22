import css from './page.module.css';
import BagsList from '../../../components/bagsList/bagsList';
import {  getCatalog, dataProps } from '../../../lib/api';


export default async function Catalog() {
    const data :dataProps = await getCatalog();

    return (
        <div className={css.catalog}>

            <BagsList bagsData={data} />
        </div>
    );
}
