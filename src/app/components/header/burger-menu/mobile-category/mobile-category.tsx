'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import css from './mobile-category.module.css';
import clsx from 'clsx';

interface Props {
    onClickClose: (isOpen: boolean) => void;
}

export default function MobileCategory({ onClickClose }: Props) {
    const pathname: string = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClickClose = () => {
        onClickClose(false);
    };

    return (
        <nav className={css.navigation}>
            {!isOpen && (
                <ul className={css.list}>
                    <li className={css.item}>
                        <Link
                            href="/"
                            onClick={handleClickClose}
                            className={clsx(css.menuLink, pathname === '/' && css.isActive)}
                        >
                            Головна
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href="" onClick={handleClickOpen} className={css.menuLinkCategory}>
                            Категорій
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link
                            href="/catalog"
                            onClick={handleClickClose}
                            className={clsx(css.menuLink, pathname === '/catalog' && css.isActive)}
                        >
                            Каталог товарів
                        </Link>
                    </li>
                </ul>
            )}

            {isOpen && (
                <ul className={css.category}>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Готові вироби
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Схеми для вишивки бісером
                        </Link>
                    </li>

                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Інструменти для рукоділля
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Сумки
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Аксесуари
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Бісер PRECIOSA
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link href={'/catalog'} onClick={handleClickClose} className={css.link}>
                            Біжутерія
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
