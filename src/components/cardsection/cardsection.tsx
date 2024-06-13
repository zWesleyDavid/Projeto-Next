import styles from "./cardsection.module.css"

interface CardSectionProps {
    children: React.ReactNode
    titulo: string
}

function CardSection({children, titulo}: CardSectionProps){
    return (
        <div className={styles.infos}> 
            <h2>{titulo}</h2>
            {children}
        </div>
    )
}

export default CardSection