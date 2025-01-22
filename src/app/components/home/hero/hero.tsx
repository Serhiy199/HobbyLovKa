import css from './hero.module.css';
// import Link from 'next/link';

export default function HeroPage() {
    return (
        <section className={css.hero}>
            <h1 className={css.title}>Bags of your dreams</h1>

            <h3 className={css.text}>Тут Ви знайдете все, що забажаєте</h3>
        </section>
    );
}
