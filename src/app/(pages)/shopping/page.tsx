'use client';

import { useState } from 'react';
import { productsProps } from '../../types/types';
import CardProducts from '../../components/card-products/card-products';
import css from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import '../../styles/globals.css';

type buttonProps = {
    onId: string;
    onImages: string[];
    onTags: string[];
    onDescription: string;
    onTitle: string;
    onModel: string;
    onPrice: number;
    onRatings: number;
    children?: React.ReactNode;
};

function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' '); // Розділяємо текст на слова
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
    }
    return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
}

export default function Shopping() {
    const [products, setProducts] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedProducts = window.localStorage.getItem('saved-products');
            return savedProducts !== null ? JSON.parse(savedProducts) : [];

            // existingData.push(props);
            // localStorage.setItem('saved-products', JSON.stringify(existingData));
        }
        return [];
    });

    return (
        <section className="container">
            <h2 className="sectionTitle">Shopping page</h2>
            <ul className={css.wrapper}>
                {products.map((list: buttonProps) => {
                    console.log(list);

                    return (
                        <li key={list.onId} className={css.item}>
                            <Link className={css.card} href={``}>
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
                                        src={list.onImages[0]}
                                        alt={list.onTitle}
                                    />

                                    <div className={css.details}>
                                        <div className={css.rating}>
                                            <i className={clsx(css.fas && css.faStar)}>★</i>
                                            <i className={clsx(css.fas && css.faStar)}>★</i>
                                            <i className={clsx(css.fas && css.faStar)}>★</i>
                                            <i className={clsx(css.fas && css.faStar)}>★</i>
                                            <i className={clsx(css.fas && css.faStar)}>★</i>
                                            <span>{list.onRatings}</span>
                                        </div>
                                        <div className={css.tags}>
                                            {list.onTags.map((listTag: string, i: number) => (
                                                <span key={i} className={css.tag}>
                                                    {listTag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className={css.desc}>
                                            {truncateText(list.onDescription, 13)}
                                        </p>
                                    </div>
                                </div>

                                <div className={css.itemSection}>
                                    <div className={css.imgTextTitle}>
                                        <h2 className={css.productTitle}>{list.onTitle}</h2>
                                        {/* <Button
                                            onId={listProducts._id}
                                            onImages={listProducts.images}
                                            onTags={tags}
                                            onDescription={listProducts.description}
                                            onTitle={listProducts.title}
                                            onModel={listProducts.model}
                                            onPrice={listProducts.price}
                                            onRatings={listProducts.ratings.average}
                                        >
                                            <MdAddShoppingCart className={css.iconShopping} />
                                        </Button> */}
                                    </div>

                                    <div className={css.priceText}>
                                        <p className={css.text}>{list.onModel}</p>
                                        <p className={css.text}>₴ {list.onPrice} грн</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );

                    // return <CardProducts key={list.onId} listProducts={list} />;
                })}
            </ul>
        </section>
    );
}
