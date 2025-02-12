import css from './burger-menu.module.css';

export default function BurgerMenu() {
    return (
        <button type="button" className={css.burger} title="Menu">
            <svg className={css.icon} width={40} height={40}>
                <use href="./icons.svg#mob-icon-menu"></use>
            </svg>
        </button>
    );
}
