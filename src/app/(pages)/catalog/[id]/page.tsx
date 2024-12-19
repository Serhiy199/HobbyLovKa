'use client';

import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <div>
        <p>{`Information about company (${params.id})`}</p>
      </div>
    </>
  );
}
