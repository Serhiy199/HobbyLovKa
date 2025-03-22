'use client';

import { useState, useEffect } from 'react';
import css from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import '../../styles/globals.css';
import { AiTwotoneDelete } from 'react-icons/ai';
// import { ShoppingModel } from '../../types/types';
import { orderProps } from '../../types/types';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
// import { createShopping } from '../../../lib/mongoDB/controllers/shopping-controllers';

function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' '); // Розділяємо текст на слова
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
    }
    return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
}

export default function Shopping() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    // const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedProducts = localStorage.getItem('saved-products');
            // console.log(products);
            return savedProducts !== null ? JSON.parse(savedProducts) : [];
        }

        return [];
    });

    const deleteProducts = (event: React.MouseEvent<HTMLButtonElement>, productId: string) => {
        event.preventDefault(); // Запобігає переходу на іншу сторінку
        event.stopPropagation(); // Запобігає спрацьовуванню Link

        setProducts((prevProduct: orderProps[]) => {
            return prevProduct.filter(product => product.onId !== productId);
        });
    };

    useEffect(() => {
        localStorage.setItem('saved-products', JSON.stringify(products));
    }, [products]);

    if (products.length === 0) {
        return (
            <section className="section">
                <div className="container">
                    <div className={css.boxIconNotProducts}>
                        <MdOutlineRemoveShoppingCart className={css.iconNotProducts} />
                    </div>
                    <p className={css.notProducts}>
                        Шановний клієнте, кошик порожній, але в нас широкий вибір асортиментів, ми
                        впевнені що Ви знайдете потрібний!!!
                    </p>
                </div>
            </section>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const orderData = {
            name,
            phone,
            arrShopping: products, // Передаємо масив товарів
        };

        const res = await fetch('/api/shopping', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });

        const data = await res.json();
        console.log('Response:', data);
        if (res.ok) {
            alert('Замовлення відправлено!');
        } else {
            alert('Помилка при відправці замовлення!');
        }
    };

    return (
        <>
            <section className="section">
                <div className="container">
                    {' '}
                    <h2 className="sectionTitle">Придбані товари</h2>
                    <ul className={css.wrapper}>
                        {products.map((list: orderProps) => {
                            return (
                                <li key={list.onId} className={css.item}>
                                    <Link className={css.card} href="">
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
                                                    {list.onTags.map(
                                                        (listTag: string, i: number) => (
                                                            <span key={i} className={css.tag}>
                                                                {listTag}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                                <p className={css.desc}>
                                                    {truncateText(list.onDescription, 13)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={css.itemSection}>
                                            <div className={css.imgTextTitle}>
                                                <h2 className={css.productTitle}>{list.onTitle}</h2>
                                                <button
                                                    onClick={event =>
                                                        deleteProducts(event, list.onId)
                                                    }
                                                    type="button"
                                                    title="Delete"
                                                    className={css.button}
                                                >
                                                    <AiTwotoneDelete className={css.iconShopping} />
                                                </button>
                                            </div>

                                            <div className={css.priceText}>
                                                <p className={css.text}>{list.onModel}</p>
                                                <p className={css.text}>₴ {list.onPrice} грн</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className={css.container}>
                        <form className={css.form} onSubmit={handleSubmit}>
                            <label className={css.formTitle}>Оформлення замовлення</label>
                            <div className={css.info}>
                                {' '}
                                <input
                                    className={css.field}
                                    type="text"
                                    placeholder="Введіть Ваше ім'я"
                                    value={name}
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                                <input
                                    className={css.field}
                                    type="tel"
                                    placeholder="Введіть Ваш номер телефону"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    name="phone"
                                    required
                                />
                            </div>

                            <button className={css.buttonShop} type="submit">
                                Замовити
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
