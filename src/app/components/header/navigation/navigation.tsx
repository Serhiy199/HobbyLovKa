'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
    const pathname: string = usePathname();

    return (
        <nav>
            <ul className={css.menu}>
                <li className={css.menuItem}>
                    <Link href="/" className={clsx(css.menuLink, pathname === '/' && css.isActive)}>
                        Головна
                    </Link>
                </li>
                <li>
                    <Link href="/#category" className={css.menuLinkCategory}>
                        Категорій
                    </Link>
                </li>
                <li className={css.menuItem}>
                    <Link
                        href="/catalog?page=1"
                        className={clsx(css.menuLink, pathname === '/catalog' && css.isActive)}
                    >
                        Каталог товарів
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
