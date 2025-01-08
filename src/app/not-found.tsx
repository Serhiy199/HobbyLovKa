import Link from 'next/link';
import css from '../styles/not-found.module.css';
import Button from '../components/button/button';

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>404 🚧</h2>
            <p className={css.text}>Oops!!!! Sorry!!!! Page not found</p>
            <Link href="/"> {<Button>Go home</Button>}</Link>
        </div>
    );
}
