'use client';

import React from 'react';
import ErrorButton from '../../../components/errorButton/errorButton';

export interface ErrorComponentProps {
    error: Error;
    reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
    return (
        <div>
            <p>{`Щось пішло не так. ${error.message}`}</p>
            <ErrorButton onClick={() => reset()}>Спробуйте знову</ErrorButton>
        </div>
    );
}
