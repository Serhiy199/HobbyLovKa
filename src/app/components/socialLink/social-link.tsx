import Link from 'next/link';
import Image from 'next/image';
import css from './social-link.module.css';

export default function SocialLink() {
    return (
        <ul className={css.list}>
            <li>
                <Link
                    href="https://www.instagram.com/mariia_gorodetskaia"
                    aria-label="Перейти на сторінку Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
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
                <Link
                    href="https://www.facebook.com/share/14kZPUeCCo/"
                    aria-label="Перейти на сторінку Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
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
