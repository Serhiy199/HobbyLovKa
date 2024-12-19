'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound({}) {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/catalog">Back to companies</Link>
    </div>
  );
}
