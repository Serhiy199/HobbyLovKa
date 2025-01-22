import React from 'react';
import css from './footer.module.css';
import Link from 'next/link';
import { raleway } from '../../styles/fonts';
import clsx from 'clsx';
import '../../globals.css';

export default function Footer(): React.ReactNode {
    return (
        <footer className={`${css.footerLayout} section`}>
            <div className={`${css.footerContainer} container`}>
                <div className={css.footerContainerList}>
                    <Link href="/" lang="en" className={clsx(raleway.className, css.footerLogo)}>
                        <span className={css.footerLogoLink}>Hobby</span>LovKa
                    </Link>
                    <div>
                        <h3 className={css.footerTitle}>Контактна інформація</h3>
                        <address className={css.address}>
                            <ul className={css.contact}>
                                <li className={css.contactItem}>
                                    <Link href={''}>м.Бориспіль, вул. Віктора Йови 3</Link>
                                </li>
                                <li className={css.contactItem}>
                                    <Link href="mailto:maria.horog.89@gmail.com">
                                        maria.horog.89@gmail.com
                                    </Link>
                                    <br />
                                </li>
                                <li className={css.contactItem}>
                                    <Link href="tel:+380961050086">+38 096 105 00 86</Link>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>
                <div className={css.footerIconLink}>
                    <h3 className={css.footerTitle}>Приєднуйся до наших соціальних мереж</h3>
                    <ul className={css.footerIcon}>
                        <li>
                            <Link
                                className={css.footerSocialLink}
                                href=""
                                aria-label="Перейти на сторінку Instagram"
                            >
                                <svg
                                    className={css.footerIcon}
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#instagram"></use>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={css.footerSocialLink}
                                href=""
                                aria-label="Перейти на сторінку Twitter"
                            >
                                <svg
                                    className={css.footerIcon}
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#twitter"></use>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={css.footerSocialLink}
                                href=""
                                aria-label="Перейти на сторінку Facebook"
                            >
                                <svg
                                    className={css.footerIcon}
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#facebook"></use>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={css.footerSocialLink}
                                href=""
                                aria-label="Перейти на сторінку Linkedin"
                            >
                                <svg
                                    className={css.footerIcon}
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#linkedin"></use>
                                </svg>
                            </Link>
                        </li>
                    </ul>
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
