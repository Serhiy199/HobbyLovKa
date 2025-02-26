'use client';

import css from './search.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import MagnifyingGlassIcon from '../../../../../public/MagnifyingGlassIcon';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback(term => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div className={css.container}>
            <label htmlFor="search" className={css.label}>
                Search
            </label>
            <input
                className={css.input}
                placeholder={placeholder}
                onChange={e => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className={css.icon} />
        </div>
    );
}
