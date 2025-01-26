import css from './hero.module.css';
// import '../../../globals.css';
// import Link from 'next/link';
// import Image from 'next/image';
import SocialLink from '../../socialLink/social-link';

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
                <SocialLink />
            </div>
        </section>
    );
}
