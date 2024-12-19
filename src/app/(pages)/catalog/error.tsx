'use client';

import React from 'react';
import Button from '../../../components/button/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Щось пішло не так. ${error.message}`}</p>
      <Button onClick={() => reset()}>Спробуйте знову</Button>
    </div>
  );
}
