import styles from './ArticleCard.module.css'


export default function ArticleCard(props) {
  return (
    <div className={styles.articlecard}>
        <div className={styles.card__header}>
            <div className={styles.articlecard__hederinfo}>
                <div className={styles.articlecard__info}>{props.date}
                <a href='#!' className={styles.articlecard__info}>{props.info}</a>
                </div>
                <div className={styles.articlecard__title}>{props.title}
            <p className={styles.articlecard__desc}><span>{props.description}</span></p>
                </div>
            </div>
            <img className={styles.articlecard__image} src={props.img} alt='Icon' ></img>
            
        </div>
        <div className={styles.articlecard__text}>{props.text}</div>
        <div className={styles.articlecard__footer}>
            <a href='#!' className={styles.articlecard__btn}>
            Читать в источнике
            </a>
        <div className={styles.articlecard__footerinfo}>{props.footer}</div>
        </div>
    </div>
  )
}