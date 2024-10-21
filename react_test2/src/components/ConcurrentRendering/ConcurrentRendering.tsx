'use client';

import React, { useTransition, useState, FormEvent } from 'react';

export function ConcurrentRendering() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [results, setResults] = useState<string[]>([]);
    const [isPanding, startTransition] = useTransition();

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;

        setSearchQuery(value);

        startTransition(() => {
            for (let i = 0; i < 10000; i++) {
                const res = [...results];
                res.push(`new value: ${value}`);

                setResults(res);
            }
        });
    }

    return (
        <div>
            <input value={searchQuery} onChange={handleInputChange} />
            {isPanding ? (
                <p>Loading</p>
            ) : (
                <div>Search Result {results}</div>
            )}
        </div>
    );
}
