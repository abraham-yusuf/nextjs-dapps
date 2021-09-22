import styles from '../styles/globals.css';

export default function Custom404 () {
    return(
        <div>
            <h1 className={styles['title-not-found']}>Oppsss...</h1>
            <h1 className={styles['title-not-found']}>Halaman Yang Anda Cari Tidak </h1>
        </div>
    )
}