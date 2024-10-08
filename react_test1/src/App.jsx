import { Article } from './components/Article/Article';

function App() {
    useLayoutEffect(() => {
        const box = document.getElementById('box');
        const { height } = box.getBoundingClientRect();

        if (height > 300) {
            // Программно обновляем элемент на основе его высоты
            box.style.backgroundColor = 'red';
        }
    }, []); // Эффект выполняется синхронно перед обновлением экрана

    return (
        <>
            <h1>Hello there</h1>
            <Article />
        </>
    );
}

export default App;
