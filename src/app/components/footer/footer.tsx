import React from 'react';
import css from './footer.module.css';
import Link from 'next/link';
// import clsx from 'clsx';
import '../../styles/globals.css';
import Information from './information/Information';
import Logo from '../logo/logo';
import SocialLink from '../socialLink/social-link';
import Exclusive from './exclusive/exclusive';

export default function Footer() {
    return (
        <footer className={`${css.footerLayout} section`}>
            <div className={`${css.footerContainer} container`}>
                <div className={css.footerContainerList}>
                    <Logo textColor="footer" />
                    <div>
                        <h3 className={css.title}>Контактна інформація</h3>
                        <address className={css.address}>
                            <ul className={css.contact}>
                                {/* <li className={css.contactItem}>
                                    <Link href={''}>м.Бориспіль, вул.Віктора Йови 3</Link>
                                </li> */}
                                <li className={css.contactItem}>
                                    <Link href="mailto:maria.horog.89@gmail.com">
                                        maria.horog.89@gmail.com
                                    </Link>
                                    <br />
                                </li>
                                <li className={css.contactItem}>
                                    <Link href="tel:+380961050086">+38 096 105 00 86</Link>
                                </li>
                                <li className={css.contactItem}>
                                    <Link href="tel:+380669016927">+38 066 901 69 27</Link>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>
                <Information />
                <Exclusive />
                <div className={css.iconLink}>
                    <h3 className={css.title}>Приєднуйся до наших соціальних мереж</h3>
                    <SocialLink />
                </div>

                {/* <div className={"form-footer">
                <form className={"form-email">
                    <h3 className={"form-title">ПІДПИШИСЬ НА СПОВІЩЕННЯ</h3>
                    <div className={"model-footer-email">
                        <input type="email" name="email" className={"footer-email" placeholder="E-mail"/>
                        <button type="submit" className={"button footer-but">Підписатися
                            <svg className={"modal-icon-foter" width="24" height="24">
                                <use href="./images/icons.svg.svg#icon-icon-send"></use>
                        </button>
                    </div>
                </form>
            </div> */}
            </div>

            <p className={css.footerText}>&copy; 2025 Created SH</p>
        </footer>
    );
}
