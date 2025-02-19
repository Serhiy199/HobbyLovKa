// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

// import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
// import Button from '../button/button';
import { productsProps } from '../../types/types';
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
    getRequest,
}: {
    listProducts: productsProps;
    getRequest?: string;
}): React.ReactNode {
    // const galleryImage: string = listProducts.images[0];
    // const location = useLocation();

    // const defaultImg = 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg';

    const tags = listProducts.tags;

    return (
        <li className={css.item}>
            <Link className={css.card} href={`/catalog/${getRequest}/${listProducts._id}`}>
                <div className={css.poster}>
                    <Image
                        width={884}
                        height={1280}
                        style={{
                            width: '100%',
                            height: '350px',
                            // maxHeight: '350px',
                            objectFit: 'cover',
                        }}
                        src={listProducts.images[0]}
                        alt={listProducts.title}
                    />

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
                        <p className={css.desc}>{truncateText(listProducts.description, 13)}</p>
                    </div>
                </div>

                <div className={css.itemSection}>
                    <div className={css.imgTextTitle}>
                        <h2 className={css.productTitle}>{listProducts.title}</h2>
                        <button type="button" className={css.btn}>
                            🛒
                        </button>
                    </div>

                    <div className={css.priceText}>
                        <p className={css.text}>{listProducts.model}</p>
                        <p className={css.text}>₴ {listProducts.price} грн</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}
