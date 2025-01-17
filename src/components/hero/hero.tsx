import Image from 'next/image';
import css from './hero.module.css';
import Link from 'next/link';
import heroImage from '../../../public/photo_шопер_котик.jpg';

export default function HeroPage() {
    return (
        <section>
            <div className={css.bgWrap}>
                {' '}
                <Image
                    alt="Mountains"
                    src={heroImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        // width: '100%',
                        // height: 'auto',
                    }}
                />
            </div>
            <h1 className={css.title}>Bags of your dreams</h1>

            <h3 className={css.text}>На нашому сайті Ви знайдете все, що забажаєте</h3>
            <Link href="/#category" className={css.navLink}>
                До категорій
            </Link>
        </section>
    );
}
