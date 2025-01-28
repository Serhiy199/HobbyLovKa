'use client';

// import { URLSearchParams } from 'react';

import css from './nav-bar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { PiTowelFill } from 'react-icons/pi';

export default function NavBar() {
    const pathname: string = usePathname();

    return (
        <nav className={`${css.navbar} container`}>
            <ul className={css.navbarNav}>
                <li className={css.item}>
                    <Link className={css.link} href="/catalog/1">
                        <PiTowelFill className={css.fas} />
                        Рушники
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🖼️ Схеми для вишивки бісером
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🪡 Інструменти для рукоділля
                    </Link>
                </li>
                <li className={css.item}>
                    <Link
                        className={clsx(css.link, pathname === `/catalog/bags` && css.isActive)}
                        href="/catalog/bags?page=1"
                    >
                        👜 Сумки
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        🧷 Аксесуари
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        📿 Бісер PRECIOSA
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        👝 Біжутерія
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
