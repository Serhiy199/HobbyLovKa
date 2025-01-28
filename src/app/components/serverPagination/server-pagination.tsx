import Link from 'next/link';
import React from 'react';
import css from './server-pagination.module.css';
import clsx from 'clsx';

export default function ServerPagination({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) {
    return (
        <ul className={css.list}>
            <li>
                <Link
                    href={`/catalog?page=${currentPage - 1}`}
                    className={clsx(css.button, currentPage === 1 && css.disabled)}
                >
                    Previous
                </Link>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                    <Link
                        href={`/catalog?page=${index + 1}`}
                        className={clsx(css.button, currentPage === index + 1 && css.isActive)}
                    >
                        {index + 1}
                    </Link>
                </li>
            ))}
            <li>
                <Link
                    href={`/catalog?page=${currentPage + 1}`}
                    className={clsx(css.button, currentPage === totalPages && css.disabled)}
                >
                    Next
                </Link>
            </li>
        </ul>
    );
}
