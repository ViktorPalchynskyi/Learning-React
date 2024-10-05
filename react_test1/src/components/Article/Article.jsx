import { Button } from '../Button/Button';

export function Article() {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perferendis cumque distinctio eveniet ex hic!
                Harum, maxime accusantium totam voluptatibus
                voluptatum quos labore assumenda mollitia magni?
                Maxime eos architecto sequi voluptatum.
            </p>
            <Button onClick={() => console.log('Updated')}>
                Update
            </Button>
            <Button onClick={() => console.log('Deleted')}>
                Delete
            </Button>
        </>
    );
}
