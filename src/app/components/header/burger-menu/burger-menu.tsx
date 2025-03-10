'use client';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import css from './burger-menu.module.css';
import { useState } from 'react';
import Logo from '../../logo/logo';
import { RiCloseLargeLine } from 'react-icons/ri';
import SocialLink from '../../socialLink/social-link';
import MobileCategory from './mobile-category/mobile-category';

export default function BurgerMenu() {
    // const pathname: string = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClickClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            {' '}
            <button onClick={handleClickOpen} type="button" className={css.burger} title="Menu">
                <svg className={css.icon} width={40} height={40}>
                    <use href="./icons.svg#mob-icon-menu"></use>
                </svg>
            </button>
            {isOpen && (
                <div className={css.mobileMenu}>
                    <div className={css.mobileMenuContainer}>
                        <div className={css.boxHead}>
                            <Logo textColor={'mobile-menu'} />
                            <button
                                onClick={handleClickClose}
                                type="button"
                                className={css.closeBtn}
                                title="Close menu"
                            >
                                <RiCloseLargeLine className={css.closeIcon} />
                            </button>
                        </div>
                        <MobileCategory onClickClose={setIsOpen} />
                        <div className={css.boxContact}>
                            <ul className={css.contact}>
                                <li className={css.contactItem}>
                                    <svg
                                        className={css.contactsContMail}
                                        width="16px"
                                        height="12px"
                                    >
                                        <use href="/icons.svg#icon-email"></use>
                                    </svg>
                                    <Link href="mailto:maria.horog.89@gmail.com">
                                        maria.horog.89@gmail.com
                                    </Link>
                                </li>
                                <li className={css.contactItem}>
                                    <svg
                                        className={css.contactsContMail}
                                        width="10px"
                                        height="16px"
                                    >
                                        <use href="/icons.svg#smartphone"></use>
                                    </svg>
                                    <Link href="tel:+380961050086"> +38 096 105 00 86</Link>
                                </li>
                            </ul>
                            <SocialLink />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
