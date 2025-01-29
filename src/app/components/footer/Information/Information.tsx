import Link from 'next/link';
import css from './Information.module.css';

export default function Information() {
    return (
        <div>
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
                    <Link className={css.link} href={'aboutUs'}>
                        Про нас
                    </Link>
                </li>
            </ul>
        </div>
    );
}
