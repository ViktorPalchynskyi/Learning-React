import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
        <H1elem>'Hello there'</H1elem>
    </React.StrictMode>
);

function H1elem({ children }) {
    const [count, setCount] = React.useState(0);

    const memo = React.useMemo(() => count * 100000, [count]);
    const memo2 = React.useMemo(() => count * 200000, [count]);

    return (
        <h1 onClick={() => setCount(count + 1)}>
            {children} {count} {memo}
        </h1>
        // <h1>{children}</h1>
    );
}

console.log('root', root);
console.log(
    'p elem',
    React.createElement(
        'p',
        { onClick: () => console.log('Hello there') },
        React.cloneElement('span', null, 'Hello there')
    )
);
