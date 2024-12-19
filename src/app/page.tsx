import Link from 'next/link';
import Button from '../components/button/button';
import css from './page.module.css';
import MagicButton from '@/components/button/magic-button';

export default function Home() {
  return (
    <div className={css.hero}>
      <h1 className={css.heroTitle}>Bags of your dreams</h1>
      <h2 className={css.heroText}>У нашому каталозі ви знайдете все, що забажаєте</h2>
      <Link href="/catalog">
        <Button>Переглянути зараз</Button>
      </Link>
      <MagicButton />
    </div>
  );
}
