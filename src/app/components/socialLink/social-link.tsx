import Link from 'next/link';
import Image from 'next/image';
import css from './social-link.module.css';

export default function SocialLink() {
    return (
        <ul className={css.list}>
            <li>
                <Link href="" aria-label="Перейти на сторінку Instagram">
                    <Image
                        src="/instagram.png"
                        className={css.icon}
                        width={30}
                        height={30}
                        alt="Instagram"
                        aria-hidden="true"
                    />
                </Link>
            </li>
            <li>
                {' '}
                <Link href="" aria-label="Перейти на сторінку Facebook">
                    <Image
                        src="/facebook.png"
                        className={css.icon}
                        width={30}
                        height={30}
                        alt="Facebook"
                        aria-hidden="true"
                    />
                </Link>
            </li>
        </ul>
    );
}
