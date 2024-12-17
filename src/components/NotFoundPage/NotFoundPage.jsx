import { Link } from 'react-router-dom';
import { container, title, text } from './NotFoundPage.module.css';
import Button from '../../components/Button/Button';

export default function NotFoundPage() {
    return (
        <div className={container}>
            <h2 className={title}>Construction 🚧</h2>
            <p className={text}>Oops!!!! Sorry!!!! Page not found</p>
            <Link to={'/'}> {<Button text="Go home page" />}</Link>
        </div>
    );
}
