'use client';

import css from './nav-bar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { FaBagShopping } from 'react-icons/fa6';
import { GiPrayerBeads } from 'react-icons/gi';
import { PiTowelFill } from 'react-icons/pi';

export default function NavBar() {
    const pathname: string = usePathname();

    return (
        <nav className={`${css.navbar} container`}>
            <ul className={css.navbarNav}>
                <li className={css.item}>
                    <Link className={css.link} href="/catalog/1">
                        {/* <i className={css.fas}></i> */}
                        <PiTowelFill className={css.fas} />
                        Рушники
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        {/* <i className={css.fas}></i> */}
                        🖼️ Схеми для вишивки бісером
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        {/* <i className={css.fas}></i> */}
                        🪡 Інструменти для рукоділля
                    </Link>
                </li>
                <li className={css.item}>
                    <Link
                        className={clsx(css.link, pathname === '/catalog/1' && css.isActive)}
                        href=""
                    >
                        {/* <i className={css.fas}></i> */}
                        {/* <FaBagShopping className={css.fas} /> */}
                        👜 Сумки
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        {/* <i className={css.fas}></i> */}
                        🧷 Аксесуари
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        {/* <i className={css.fas}></i> */}
                        {/* <GiPrayerBeads className={css.fas} /> */}
                        📿 Бісер PRECIOSA
                    </Link>
                </li>
                <li className={css.item}>
                    <Link className={css.link} href="">
                        {/* <i className={css.fas}></i> */}
                        👝 Біжутерія
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
