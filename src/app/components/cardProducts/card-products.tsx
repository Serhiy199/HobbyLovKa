// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

// import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
// import Button from '../button/button';
import { HandBagProps } from '../../../lib/mongoDB/models/hand-bags-models';
import clsx from 'clsx';
import css from '../cardProducts/card-products.module.css';

function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' '); // Розділяємо текст на слова
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
    }
    return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
}

export default function CardProducts({
    listProducts,
}: {
    listProducts: HandBagProps;
}): React.ReactNode {
    // const galleryImage: string = listProducts.images[0];
    // const location = useLocation();

    // const defaultImg = 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg';

    const tags = listProducts.tags;

    return (
        <li className={css.item}>
            <Link className={css.card} href={`/catalog/${listProducts._id}`}>
                <div className={css.poster}>
                    <div className={css.cardImg}>
                        <Image
                            className={css.img}
                            // width={325}
                            // height={300}
                            layout="fill"
                            objectFit="cover"
                            src="/photo_шопер_котик.jpg"
                            alt={listProducts.title}
                        />
                    </div>

                    <div className={css.details}>
                        <div className={css.rating}>
                            <i className={clsx(css.fas && css.faStar)}>★</i>
                            <i className={clsx(css.fas && css.faStar)}>★</i>
                            <i className={clsx(css.fas && css.faStar)}>★</i>
                            <i className={clsx(css.fas && css.faStar)}>★</i>
                            <i className={clsx(css.fas && css.faStar)}>★</i>
                            <span>{listProducts.ratings.average}</span>
                        </div>
                        <div className={css.tags}>
                            {tags.map((listTag: string, i: number) => (
                                <span key={i} className={css.tag}>
                                    {listTag}
                                </span>
                            ))}
                        </div>
                        <p className={css.desc}>{truncateText(listProducts.description, 10)}</p>
                        <button type="button" className={css.btn}>
                            Замовити
                        </button>
                    </div>
                </div>

                <div className={css.imgText}>
                    <h2 className={css.productTitle}>{listProducts.title}</h2>
                    <p className={css.productModel}>{listProducts.model}</p>
                </div>
            </Link>
        </li>
    );
}
