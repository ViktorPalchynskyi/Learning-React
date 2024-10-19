'use client';

import React, { useState } from 'react';

export function Batching() {
    const [isFetching, setFetching] = useState(false);
    const [error, setError] = useState(false);
    const [formStatus, setFormStatus] = useState('');

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
        </div>
    );
}
