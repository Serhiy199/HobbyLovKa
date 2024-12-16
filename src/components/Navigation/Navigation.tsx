// import { NavLink } from 'react-router-dom';
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, link, isActive } from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={navigation}>
      <Link href="/" className={clsx(link, pathname === '/' && isActive)}>
        Home
      </Link>
      <Link href="/campers" className={clsx(link, pathname === '/campers' && isActive)}>
        Catalog
      </Link>
    </nav>
  );
}
