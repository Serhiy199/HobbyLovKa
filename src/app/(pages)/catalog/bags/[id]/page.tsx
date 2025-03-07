import Image from 'next/image';

import { getOneBag } from '../../../../../lib/mongoDB/controllers/bags-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';
import '../../../../styles/globals.css';
import clsx from 'clsx';
import Button from '@/app/components/button/button';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // const { getRequest } = await params;
    const data: productsProps = await getOneBag(id);
    const availability: string = data.availability ? 'В наявності' : 'Немає в наявності';
    const tags = data.tags.map(tag => (
        <li key={tag} className={css.tag}>
            {tag}
        </li>
    ));
    // console.log(tags);

    return (
        <div className={clsx('container', css.container)}>
            <h2 className="sectionTitle">{data.title}</h2>
            <div className={css.wrapper}>
                {' '}
                <div className={css.containerImage}>
                    <Image
                        width={577}
                        height={1000}
                        src={data.images[0]}
                        alt={data.title}
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            // maxHeight: '350px',
                            objectFit: 'cover',
                        }}
                    />
                    <div>
                        {' '}
                        <div className={css.boxPrice}>
                            <p
                                className={clsx(
                                    css.text && data.availability
                                        ? css.availabilityTrue
                                        : css.availabilityFalse
                                )}
                            >
                                {availability}
                            </p>
                            <p className={css.price}>₴ {data.price}.00 грн</p>
                        </div>
                        <div className={css.box}>
                            <p className={css.text}>
                                <span className={css.color}>Виробник:</span> {data.producer}
                            </p>
                            <p className={css.text}>
                                <span className={css.color}>Модель:</span> {data.model}
                            </p>
                            <div className={css.contain}>
                                <p className={clsx(css.text, css.color)}>Теги:</p>
                                <ul className={clsx(css.text, css.listTags)}>{tags}</ul>
                            </div>
                        </div>
                        <div className={css.buttonBox}>
                            <Button>Додати до 🛒</Button>
                        </div>
                    </div>
                </div>
                <div className={css.characteristics}>
                    <h4 className={css.characteristicsTitle}>Характеристики</h4>
                    {/* <p className={css.text}>
                        <span className={css.color}>Виробник:</span> {data.producer}
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Модель:</span> {data.model}
                    </p> */}
                    <p className={css.text}>
                        <span className={css.color}>Матеріал виготовлення:</span> {data.material}
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Матеріал декору:</span>{' '}
                        {data.decorationMaterial}
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Розміри:</span> {data.dimensions.width} x{' '}
                        {data.dimensions.height} x {data.dimensions.depth} см
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Довжина ручки:</span> {data.handle} см
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Тип застібки:</span> {data.typeClasp}
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Призначення товару:</span> {data.appointment}
                    </p>
                    <p className={css.text}>
                        <span className={css.color}>Артикль товару:</span> {data.article}
                    </p>

                    {/* <p className={css.text}>Заповнення: {data.filling}</p> */}
                </div>
            </div>
            <div className={css.description}>
                <span className={css.color}>Опис:</span> {data.description}
            </div>
        </div>
    );
}
