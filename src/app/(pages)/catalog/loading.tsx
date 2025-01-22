import css from '../../styles/loading.module.css';

export default function Loader() {
    return (
        <div className={css.container}>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
        </div>
    );
}
