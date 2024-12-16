// import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Link from 'next/link';
import { head, link, logo } from './Header.module.css';

export default function Header() {
    return (
        <header className={head}>
            <Link href="/" className={link}>
                Travel<span className={logo}>Trucks</span>
            </Link>
            <Navigation />
        </header>
    );
}
