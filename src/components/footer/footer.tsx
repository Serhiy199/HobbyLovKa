import React from 'react';
import css from './footer.module.css';
import Link from 'next/link';

export default function Footer(): React.ReactNode {
    return (
        <footer className={css.footerLayout}>
            <div className={css.footerContainer}>
                <div className={css.footerContainerList}>
                    <Link href="/" lang="en" className={css.footerLogo}>
                        <span className={css.navigationLogoLink}>Web</span>
                        <span className={css.footerLink}>Studio</span>
                    </Link>
                    <address className={css.address}>
                        <ul>
                            <li className={css.footerList}>
                                <p className={css.footerAddress}>
                                    м.Бориспіль, вул. Віктора Йови 3
                                </p>
                            </li>
                            <li className={css.footerList}>
                                <a href="maria.horog.89@gmail.com" className={css.addressMail}>
                                    maria.horog.89@gmail.com
                                </a>
                                <br />
                            </li>
                            <li className={css.footerList}>
                                <a href="tel:+380961050086" className={css.addressTel}>
                                    +38 096 105 00 86
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className={css.footerIconLink}>
                    <h3 className={css.footerTitle}>ПРИЄДНУЙСЯ</h3>
                    <ul className={css.footerIcon}>
                        <li>
                            <a className={css.footerSocialLink} href="">
                                <svg className={css.footerIcon} width="20" height="20">
                                    <use href="../../../public/svg/icons.svg#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.footerSocialLink} href="">
                                <svg className={css.footerIcon} width="20" height="20">
                                    <use href="../../../public/svg/icons.svg#twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.footerSocialLink} href="">
                                <svg className={css.footerIcon} width="20" height="20">
                                    <use href="../../../public/svg/icons.svg#facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className={css.footerSocialLink} href="">
                                <svg className={css.footerIcon} width="20" height="20">
                                    <use href="../../../public/svg/icons.svg#linkedin"></use>
                                </svg>
                            </a>
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
        </footer>
    );
}
