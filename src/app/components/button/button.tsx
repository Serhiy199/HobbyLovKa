import React from 'react';
import css from './button.module.css';

export default function Button({ children }: React.PropsWithChildren) {
    return (
        <button type="button" className={css.button}>
            {children}
        </button>
    );
}
