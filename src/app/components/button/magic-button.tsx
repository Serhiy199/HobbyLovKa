'use client';

import React, { useEffect, useState } from 'react';
// import Button, { ButtonProps } from '@/app/components/button';
import ErrorButton from '../errorButton/error-button';

export default function MagicButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 2) {
            throw new Error('Unexpected error');
        }
    }, [count]);

    return <ErrorButton onClick={() => setCount(count + 1)}>Magic button</ErrorButton>;
}
