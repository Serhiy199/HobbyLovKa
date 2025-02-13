import Link from 'next/link';
import css from './inform.module.css';

export default function Information() {
    return (
        <div className={css.container}>
            <h3 className={css.title}>Інформація для клієнтів</h3>
            <ul>
                <li>
                    <Link className={css.link} href={'/return-products'}>
                        Повернення товару
                    </Link>
                </li>

                <li>
                    <Link className={css.link} href={'/payment'}>
                        Оплата та доставка
                    </Link>
                </li>

                <li>
                    <Link className={css.link} href={'/feedback'}>
                        Зворотній зв&apos;язок
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link className={css.link} href={'/manufacturers'}>
                        Виробники
                    </Link>
                </li>
                <li>
                    <Link className={css.link} href={'about-us'}>
                        Про нас
                    </Link>
                </li>
            </ul>
        </div>
    );
}
