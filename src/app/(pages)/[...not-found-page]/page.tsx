import Link from 'next/link';
import css from './page.module.css';
import Button from '../../../components/button/button';

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>404 🚧</h2>
      <p className={css.text}>Oops!!!! Sorry!!!! Page not found</p>
      <Link href="/"> {<Button text="Go home page" />}</Link>
    </div>
  );
}
