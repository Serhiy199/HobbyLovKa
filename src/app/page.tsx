import Link from 'next/link';
import Button from '../components/button/button';
import css from './page.module.css';

export default function Home() {
    // const page: number = 1;
    return (
        <div className={css.hero}>
            <h1 className={css.heroTitle}>Bags of your dreams</h1>
            <h2 className={css.heroText}>У нашому каталозі ви знайдете все, що забажаєте</h2>
            <Link href="/catalog?page=1">
                <Button>Переглянути зараз</Button>
            </Link>
        </div>
    );
}
