// import { Link } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Link from 'next/link';
import css from './header.module.css';
import '../../styles/globals.css';
import Logo from '../logo/logo';
import BurgerMenu from './burger-menu/burger-menu';

export default function Header() {
    return (
        <header className={css.head}>
            <div className={`${css.headContainer} container`}>
                {' '}
                <BurgerMenu />
                <Logo />
                <Navigation />
                <ul className={css.contact}>
                    <li className={css.contactItem}>
                        <svg className={css.contactsContMail} width="16px" height="12px">
                            <use href="/icons.svg#icon-email"></use>
                        </svg>
                        <Link href="mailto:maria.horog.89@gmail.com">maria.horog.89@gmail.com</Link>
                    </li>
                    <li className={css.contactItem}>
                        <svg className={css.contactsContMail} width="10px" height="16px">
                            <use href="/icons.svg#smartphone"></use>
                        </svg>
                        <Link href="tel:+380961050086"> +38 096 105 00 86</Link>
                    </li>
                </ul>
                <div className={css.cartShopping}>🛒</div>
            </div>
        </header>
    );
}
