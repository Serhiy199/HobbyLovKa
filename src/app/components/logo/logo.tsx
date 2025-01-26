import Link from 'next/link';
import clsx from 'clsx';
import { raleway } from '../../styles/fonts';
import css from './logo.module.css';

interface LogoProps {
    textColor?: string;
}

export default function Logo({ textColor }: LogoProps) {
    return (
        <Link
            href="/"
            lang="en"
            className={clsx(
                raleway.className,
                css.logoType,
                textColor === 'footer' && css.textColor
            )}
            title="До головної сторінки"
        >
            <span className={css.logo}>Hobby</span>LovKa
        </Link>
    );
}
