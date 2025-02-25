'use client';
import css from './burger-menu.module.css';

const handleClick = () => {
    console.log('click');
};

export default function BurgerMenu() {
    return (
        <button onClick={handleClick} type="button" className={css.burger} title="Menu">
            <svg className={css.icon} width={40} height={40}>
                <use href="./icons.svg#mob-icon-menu"></use>
            </svg>
        </button>
    );
}
