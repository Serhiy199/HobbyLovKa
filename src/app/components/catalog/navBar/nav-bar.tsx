'use client';

// import { URLSearchParams } from 'react';

import css from './nav-bar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar() {
    const pathname: string = usePathname();

    return (
        <nav className={`${css.navbar} container`}>
            <ul className={css.navbarNav}>
                <li className={css.item}>
                    <Link className={css.link} href="/catalog?page=1">
                        🎁&nbsp;Готові вироби
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🖼️&nbsp;Схеми для вишивки бісером
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        ✂️&nbsp;Інструменти для рукоділля
                    </Link>
                </li>
                <li className={css.item}>
                    <Link
                        className={clsx(css.link, pathname === `/catalog/bags` && css.isActive)}
                        href="/catalog/bags?page=1"
                    >
                        👜&nbsp;Сумки
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🧷&nbsp;Аксесуари
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🟡&nbsp;Бісер PRECIOSA
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        📿&nbsp;Біжутерія
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
