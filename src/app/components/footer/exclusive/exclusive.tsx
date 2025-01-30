import Link from 'next/link';
import css from './exclusive.module.css';

export default function Exclusive() {
    return (
        <div>
            <h3 className={css.title}>Ексклюзивні пропозиції</h3>
            <ul>
                <li>
                    <Link className={css.link} href={'/gift-certificates'}>
                        Подарункові сертифікати
                    </Link>
                </li>

                <li>
                    <Link className={css.link} href={'/products-discount'}>
                        Товари iз знижкою
                    </Link>
                </li>
                <li>
                    <Link className={css.link} href={'/actions'}>
                        Акції
                    </Link>
                </li>
            </ul>
        </div>
    );
}
