import css from './hero.module.css';
// import '../../../globals.css';
import Link from 'next/link';

export default function HeroPage() {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>Bags of your dreams</h1>
                <h3 className={css.text}>Тут Ви знайдете все, що забажаєте</h3>
            </div>
            <div className={css.socialLink}>
                <h3 className={css.socialLinkTitle}>
                    Приєднуйся до наших соціальних мереж та дізнайтесь першим про новий товар
                </h3>
                <ul className={css.socialLinkList}>
                    <li>
                        <Link
                            className={css.heroSocialLink}
                            href=""
                            aria-label="Перейти на сторінку Instagram"
                        >
                            <svg className={css.heroIcon} width="20" height="20" aria-hidden="true">
                                <use href="/icons.svg#instagram"></use>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link
                            className={css.heroSocialLink}
                            href=""
                            aria-label="Перейти на сторінку Facebook"
                        >
                            <svg className={css.heroIcon} width="20" height="20" aria-hidden="true">
                                <use href="/icons.svg#facebook"></use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
