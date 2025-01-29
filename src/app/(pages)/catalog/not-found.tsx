import '../../../app/styles/globals.css';
import Link from 'next/link';
import css from '../../../app/styles/not-found.module.css';
import Button from '../../components/button/button';
import clsx from 'clsx';

export default function NotFoundPage() {
    return (
        <section className={clsx('section', css.section)}>
            <div className={clsx('container', css.container)}>
                <h2 className={css.title}>404 🚧</h2>
                <p className={css.text}>Oops!!!! Sorry!!!! Page not found</p>
                <Link href="/"> {<Button>Go home</Button>}</Link>
            </div>
        </section>
    );
}
