'use client';

import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
    return (
        <div>
            <p>Could not found company</p>
            <Link href="/catalog?page=1">Back to catalog</Link>
        </div>
    );
}
