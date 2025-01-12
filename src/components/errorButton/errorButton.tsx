import React from 'react';
import css from './errorButton.module.css';

interface ErrorButtonProps {
    children: React.ReactNode; // Вміст кнопки
    onClick: () => void; // Обробник кліку
}

export default function ErrorButton({ children, onClick }: ErrorButtonProps) {
    return (
        <button type="button" className={css.button} onClick={onClick}>
            {children}
        </button>
    );
}
