// import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Link from 'next/link';
import { head, link, logo } from './header.module.css';

export default function Header() {
  return (
    <header className={head}>
      <Link href="/" className={link}>
        Bag<span className={logo}>Charm</span>
      </Link>
      <Navigation />
    </header>
  );
}
