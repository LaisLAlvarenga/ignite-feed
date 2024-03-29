import styles from './Sidebar.module.css';
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return(
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/47362960?v=4" />
                    <strong>lais luderer</strong>
                    <span>UI Designer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar perfil
                    </a>
                </footer>
            </aside>               
        </>
    )
}