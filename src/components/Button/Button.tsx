import React from 'react';
import css from './button.module.css';

export interface ButtonProps extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={css.button}>{text}</button>;
}
