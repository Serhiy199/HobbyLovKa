import React from 'react';
import css from './button.module.css';

// type IButtonProps =  PropsWithChildren<{
//
// }>

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <button type="button" className={css.button}>
      {children}
    </button>
  );
}
