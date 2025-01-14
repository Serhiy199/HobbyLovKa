// import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Link from 'next/link';
import css from './header.module.css';

export default function Header() {
    return (
        <header className={css.head}>
            <Navigation />
        </header>
    );
}
