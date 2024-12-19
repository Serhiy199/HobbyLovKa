'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, link, isActive } from './navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={navigation}>
      <Link href="/" className={clsx(link, pathname === '/' && isActive)}>
        Home
      </Link>
      <Link href="/catalog" className={clsx(link, pathname === '/catalog' && isActive)}>
        Catalog
      </Link>
    </nav>
  );
}
