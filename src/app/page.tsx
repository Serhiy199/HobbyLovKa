import Link from 'next/link';
import Button from '../components/Button/Button';
import { hero, heroTitle, heroText } from './page.module.css';

export default function Home() {
  return (
    <main className={hero}>
      <h1 className={heroTitle}>Campers of your dreams</h1>
      <h2 className={heroText}>You can find everything you want in our catalog</h2>
      <Link href="/campers"> {<Button text="View Now" />}</Link>
    </main>
  );
}
