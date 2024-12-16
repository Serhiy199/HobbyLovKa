import { button } from './Button.module.css';

export default function Button({ text }) {
    return <button className={button}>{text}</button>;
}
