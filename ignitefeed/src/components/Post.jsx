import styles from './Post.module.css';

export function Post() {
    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/47362960?v=4" />
                        <div className={styles.authorInfo}>
                            <strong>Lais Luderer</strong>
                            <span>Dev Front-End</span>
                        </div>
                    </div>
                    <time title="11 de maio às 11:13" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
                </header>
            </article>
        </>
    )
}