'use client';

import React, { useId, useState } from 'react';

export function Batching() {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(false);
    const [formStatus, setFormStatus] = useState('');
    const id = useId();

    async function handleClick() {
        fetch('/someting').then(() => {
            setFetching(!isFetching);
            setError(!error);
            setFormStatus(formStatus ? '' : 'new');
        });
    }

    console.log('render');

    return (
        <div>
            <p>isFetching {isFetching}</p>
            <p>error {error}</p>
            <p>formStatus {formStatus}</p>
            <button onClick={handleClick}>Click me</button>
            <p>ID = {id}</p>
        </div>
    );
}
