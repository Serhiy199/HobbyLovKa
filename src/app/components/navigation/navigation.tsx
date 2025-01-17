'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
    const pathname: string = usePathname();

    return (
        <nav>
            <ul className={css.navigation}>
                <li>
                    <Link href="/" lang="en" className={css.link}>
                        <span className={css.logo}>Bag</span>Charm
                    </Link>
                </li>
                <li>
                    <Link href="/" className={clsx(css.link, pathname === '/' && css.isActive)}>
                        Головна
                    </Link>
                </li>
                <li>
                    <Link
                        href="/catalog?page=1"
                        className={clsx(css.link, pathname === '/catalog' && css.isActive)}
                    >
                        Каталог товарів
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
