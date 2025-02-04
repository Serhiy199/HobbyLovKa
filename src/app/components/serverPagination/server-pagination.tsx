'use client';

import Link from 'next/link';
import React from 'react';
import css from './server-pagination.module.css';
import clsx from 'clsx';
import ArrowLeftIcon from '../../../../public/ArrowLeftIcon';
import ArrowRightIcon from '../../../../public/ArrowRightIcon';
import { generatePagination } from '../../../lib/utils';

import { usePathname, useSearchParams } from 'next/navigation';

export default function ServerPagination({
    totalPages,
}: {
    collection?: string;
    totalPages: number;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <>
            <div className={css.container}>
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <div className={css.list}>
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle';

                        return (
                            <PaginationNumber
                                key={page}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    );
}

function PaginationNumber({
    page,
    href,
    isActive,
    position,
}: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) {
    const numberClass = clsx(css.listNumber, {
        [css.first]: position === 'first' || position === 'single',
        [css.last]: position === 'last' || position === 'single',
        [css.active]: isActive,
        [css.hover]: !isActive && position !== 'middle',
        [css.middle]: position === 'middle',
    });

    return isActive || position === 'middle' ? (
        <div className={numberClass}>{page}</div>
    ) : (
        <Link href={href} className={numberClass}>
            {page}
        </Link>
    );
}

function PaginationArrow({
    href,
    direction,
    isDisabled,
}: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
}) {
    const arrowClass = clsx(css.arrow, {
        [css.disabled]: isDisabled,
        [css.left]: direction === 'left',
        [css.right]: direction === 'right',
    });

    const icon =
        direction === 'left' ? (
            <ArrowLeftIcon className={css.arrowIcon} />
        ) : (
            <ArrowRightIcon className={css.arrowIcon} />
        );

    return isDisabled ? (
        <div className={arrowClass}>{icon}</div>
    ) : (
        <Link className={arrowClass} href={href}>
            {icon}
        </Link>
    );
}
