import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const buttonStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
};

// use root class  for top lvl element e.g. button element
export function Button({ children, onClick, disabled, type, className }) {
    console.log(styles);

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                className,
                styles.root,
                styles.container,
                buttonStyles[type],
                {
                    [styles.disabled]: disabled,
                }
            )}
        >
            {children}
        </button>
    );
}
