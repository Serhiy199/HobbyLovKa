import css from '../../../styles/loading.module.css';

export default function Loading() {
    return (
        <div className={css.container}>
            <div className={css.loading}></div>
        </div>
    );
}
