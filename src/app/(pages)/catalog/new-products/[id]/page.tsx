import Image from 'next/image';

import { getOneNewProducts } from '../../../../../lib/mongoDB/controllers/new-products-controllers';
import { productsProps } from '../../../../types/types';
import css from './page.module.css';
import '../../../../styles/globals.css';
import clsx from 'clsx';
import Button from '../../../../components/button/button';
import { MdAddShoppingCart } from 'react-icons/md';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // const { getRequest } = await params;
    const data: productsProps = await getOneNewProducts(id);

    const availability: string = data.availability ? 'В наявності' : 'Немає в наявності';
    const tags = data.tags.map(tag => (
        <li key={tag} className={css.tag}>
            {tag}
        </li>
    ));

    return (
        <div className={clsx('container', css.container)}>
            <h2 className="sectionTitle">{data.title}</h2>
            <div className={css.wrapper}>
                {' '}
                <div className={css.containerImage}>
                    <Image width={577} height={1000} src={data.images[0]} alt={data.title} />
                </div>
                <div className={css.containerCharacteristics}>
                    <div className={css.box}>
                        {' '}
                        <div className={css.boxPrice}>
                            <p
                                className={clsx(
                                    data.availability ? css.availabilityTrue : css.availabilityFalse
                                )}
                            >
                                {availability}
                            </p>
                            <p className={css.price}>₴ {data.price}.00 грн</p>
                        </div>
                        <div className={css.boxInfo}>
                            <p>
                                <span className={css.titleListSymbolColor}>Виробник:</span>{' '}
                                {data.producer}
                            </p>
                            <p>
                                <span className={css.titleListSymbolColor}>Модель:</span>{' '}
                                {data.model}
                            </p>
                            <div className={css.boxInfoTags}>
                                <p className={clsx(css.titleListSymbolColor)}>Теги:</p>
                                <ul className={clsx(css.listTags)}>{tags}</ul>
                            </div>
                        </div>
                        <div className={css.boxButton}>
                            <Button
                                onImages={data.images}
                                onTags={data.tags}
                                onDescription={data.description}
                                onTitle={data.title}
                                onModel={data.model}
                                onPrice={data.price}
                                onRatings={data.ratings.average}
                            >
                                Додати до <MdAddShoppingCart className={css.iconShopping} />
                            </Button>
                        </div>
                    </div>
                    <div className={css.characteristics}>
                        <h4 className={css.titleCharacteristics}>Характеристики</h4>

                        <p>
                            <span className={css.titleListSymbolColor}>Матеріал виготовлення:</span>{' '}
                            {data.material}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Матеріал декору:</span>{' '}
                            {data.decorationMaterial}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Колір:</span> {data.color}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Тип вишивки:</span>{' '}
                            {data.filling}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Розміри:</span>{' '}
                            {data.dimensions.width} x {data.dimensions.height} x{' '}
                            {data.dimensions.depth} см
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Довжина ручки:</span>{' '}
                            {data.handle} см
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Тип застібки:</span>{' '}
                            {data.typeClasp}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Призначення товару:</span>{' '}
                            {data.appointment}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Артикль товару:</span>{' '}
                            {data.article}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Країна виробник:</span>{' '}
                            {data.countryOfManufacture}
                        </p>
                        <p>
                            <span className={css.titleListSymbolColor}>Тематика:</span>{' '}
                            {data.subject}
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.description}>
                <h4 className={css.titleDescription}>Опис товару:</h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
}
