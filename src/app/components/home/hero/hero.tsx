import css from './hero.module.css';
// import '../../../globals.css';
// import Link from 'next/link';

export default function HeroPage() {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>Bags of your dreams</h1>
                <h3 className={css.text}>Тут Ви знайдете все, що забажаєте</h3>
            </div>
            <div className={css.socialLink}>
                <ul className={css.socialLinkList}>
                    <h3 className={css.socialLinkTitle}>
                        Приєднуйся до наших соціальних мереж та будь першим хто побачить новий товар
                    </h3>
                    <li>файсбук</li>
                    <li>інстаграм</li>
                </ul>
            </div>
        </section>
    );
}
