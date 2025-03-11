'use client';
import React from 'react';
import css from './button.module.css';

type buttonProps = {
    onId: string;
    onImages: string[];
    onTags: string[];
    onDescription: string;
    onTitle: string;
    onModel: string;
    onPrice: number;
    onRatings: number;
    children?: React.ReactNode;
};

export default function Button(props: buttonProps) {
    const addProducts = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Запобігає переходу на іншу сторінку
        event.stopPropagation(); // Запобігає спрацьовуванню Link

        if (typeof window !== 'undefined') {
            const savedProducts = localStorage.getItem('saved-products');
            const existingData = savedProducts ? JSON.parse(savedProducts) : [];
            existingData.push(props);
            localStorage.setItem('saved-products', JSON.stringify(existingData));
        }
    };
    return (
        <button onClick={addProducts} type="button" className={css.button}>
            {props.children}
        </button>
    );
}
