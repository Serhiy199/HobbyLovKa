import css from './hero.module.css';
import Link from 'next/link';
import Button from '../button/button';

export default function HeroPage() {
    return (
        <section className={css.hero}>
            <h1 className={css.title}>Bags of your dreams</h1>
            <h2 className={css.text}>На нашому сайті Ви знайдете все, що забажаєте</h2>
            <Link href="/catalog?page=1" className={css.navLink}>
                До категорій
            </Link>
        </section>
    );
}
