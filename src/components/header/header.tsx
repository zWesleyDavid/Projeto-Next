import styles from "./header.module.css"

interface HeaderProps {
    titulo: string
}

function Header({ titulo }: HeaderProps) {
    return (
        <div className={styles.header}>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header