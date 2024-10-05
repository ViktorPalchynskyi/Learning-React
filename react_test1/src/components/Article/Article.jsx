import { Button } from '../Button/Button';
import styles from './styles.module.scss';

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
            <Button
                onClick={() => console.log('Updated')}
                disabled
                type={'secondary'}
                className={styles.updateAction}
            >
                Update
            </Button>
            <Button
                onClick={() => console.log('Deleted')}
                disabled
                type={'primary'}
                className={styles.deleteAction}
            >
                Delete
            </Button>
            <Button
                onClick={() => console.log('Updated')}
                type={'secondary'}
                className={styles.updateAction}
            >
                Update
            </Button>
            <Button
                onClick={() => console.log('Deleted')}
                type={'primary'}
                className={styles.deleteAction}
            >
                Delete
            </Button>
        </>
    );
}
