import styles from './styles.module.scss'


export default function EmptyCard() {

  return (
    <div className={styles.emptyCard}>
      <div className={styles.emptyCard__image}></div>
      <div className={styles.emptyCard__information}></div>
      <div className={styles.emptyCard__information}></div>
    </div>
  )
}
