import styles from './Card.module.css'


export default function Card(props) {
  return (
    <div className={styles.card}>
        <div className={styles.card__header}>
            <div className={styles.card__hederinfo}>
                <div className={styles.card__title}>{props.title}
            <p className={styles.card__desc}><span>{props.description}</span></p>
                </div>
            </div>
            <img className={styles.card__image} src={props.img} alt='Icon' ></img>
            
        </div>
        <div className={styles.card__status}></div>
        <div className={styles.card__price}>
            <p>{props.price}</p>
            <p className={styles.card__fullprice}>{props.fullprice}</p>
        </div>
        <div className={styles.card__pricedesc}>{props.pricedesc ? props.pricedesc : '\u00A0'}</div>
        <div className={styles.card__tarif}>В тариф входит:</div>
            <ul className={styles.card__tarifdesclist}>
            <li className={styles.card__tarifdesc}>{props.tarifdesc1}</li>
            <li className={styles.card__tarifdesc}>{props.tarifdesc2}</li>
            <li className={styles.card__tarifdesc}>{props.tarifdesc3}</li>
            </ul>
            <a href='#!' className={styles.card__btn}>
            Подробнее
            </a>
    </div>
  )
}