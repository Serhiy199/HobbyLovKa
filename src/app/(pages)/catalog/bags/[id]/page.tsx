import Image from 'next/image';

import { getOneBag } from '../../../../../lib/mongoDB/controllers/bags-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';
import '../../../../styles/globals.css';
import clsx from 'clsx';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // const { getRequest } = await params;
    const data: productsProps = await getOneBag(id);
    const availability = data.availability ? 'В наявності' : 'Немає в наявності';

    return (
        <div className={clsx('container', css.container)}>
            <h2 className={css.name}>{data.title}</h2>
            <div className={css.wrapper}>
                {' '}
                <Image width={500} height={500} src={data.images[0]} alt={data.title} />
                <div>
                    <h4>Характеристики</h4>
                    <p className={css.price}>₴ {data.price}.00</p>
                    <p className={css.text}>Виробник: {data.producer}</p>
                    <p className={css.text}>Модель: {data.model}</p>
                    <p className={css.text}>Матеріал виготовлення: {data.material}</p>
                    <p className={css.text}>Матеріал декору: {data.decorationMaterial}</p>
                    <p className={css.text}>
                        Розміри: {data.dimensions.width} x {data.dimensions.height} x{' '}
                        {data.dimensions.depth} см
                    </p>
                    <p className={css.text}>Довжина ручки: {data.handle} см</p>
                    <p className={css.text}>Тип застібки: {data.typeClasp}</p>
                    <p className={css.text}>Призначення товару: {data.appointment}</p>
                    <p className={css.text}>Призначення товару: {data.article}</p>
                    <p className={css.text}>{availability}</p>
                    {/* <p className={css.text}>Заповнення: {data.filling}</p> */}
                </div>
            </div>
            <p className={css.text}>Опис: {data.description}</p>
        </div>
    );
}
