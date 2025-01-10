// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import { HandBagProps } from '../../lib/mongoDB/models/handBags';
import clsx from 'clsx';
import css from '../ListProducts/ListProducts.module.css';

function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' '); // Розділяємо текст на слова
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
    }
    return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
}

export default function ListProducts({ listBags }: { listBags: HandBagProps }): React.ReactNode {
    // const galleryImage: string = listBags.images[0];
    // const location = useLocation();

    // const defaultImg = 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg';

    const tags = listBags.tags;

    return (
        <li className={css.card}>
            <div className={css.poster}>
                <Image
                    width={292}
                    height={320}
                    src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
                    alt={listBags.title}
                />
            </div>
            <div className={css.details}>
                <h1>{listBags.title}</h1>
                <h2>{listBags.model}</h2>
                <div className={css.rating}>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <span>{listBags.ratings.average}</span>
                </div>
                <div className={css.tags}>
                    {tags.map((listTag: string, i: number) => (
                        <span key={listBags[i]} className={css.tag}>
                            {listTag}
                        </span>
                    ))}
                </div>
                <p className={css.desc}>{truncateText(listBags.description, 9)}</p>
            </div>
        </li>
    );
}
