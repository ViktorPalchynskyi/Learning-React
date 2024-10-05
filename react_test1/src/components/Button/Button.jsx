import React from 'react';


export function Button({
    children,
    onClick,
    disabled,
}) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
