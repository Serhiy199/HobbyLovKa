'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import css from './mobile-category.module.css';
import clsx from 'clsx';

export default function MobileCategory() {
    const pathname: string = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    // const handleClickClose = () => {
    //     setIsOpen(false);
    // };

    return (
        <nav className={css.navigation}>
            <ul onClick={handleClickOpen} className={clsx(css.list, isOpen && css.isClose)}>
                <li className={css.item}>
                    <Link href="/" className={clsx(css.menuLink, pathname === '/' && css.isActive)}>
                        Головна
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href="/#category" className={css.menuLinkCategory}>
                        Категорій
                    </Link>
                </li>
                <li className={css.item}>
                    <Link
                        href="/catalog"
                        className={clsx(css.menuLink, pathname === '/catalog' && css.isActive)}
                    >
                        Каталог товарів
                    </Link>
                </li>
            </ul>

            <ul className={clsx(css.isClose, isOpen && css.isOpen)}>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Готові вироби
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Схеми для вишивки бісером
                    </Link>
                </li>

                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Інструменти для рукоділля
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Сумки
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Аксесуари
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Бісер PRECIOSA
                    </Link>
                </li>
                <li className={css.item}>
                    <Link href={'/catalog'} className={css.link}>
                        Біжутерія
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
