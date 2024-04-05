import styles from './ArticleCard.module.css'


export default function ArticleCard(props) {
    const { text, description, date } = props;
    const decodeHTMLEntities = (str) => {
        return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      };

    // const attributes = (props.info).slice(0);
    console.log('Attributes:', props.description);

    function attributes(description) {
        if (description.isTechNews) {
            return 'Technical news';
        } else if (description.isAnnouncement) {
            return 'Announcements';
        } else if (description.isDigest) {
            return 'Digest';
        } else {
            return 'Business news';
        }
    }
    
    const attributeText = attributes(description);

    const formatDate = (inputDate) => {
        // Преобразование строки с датой в объект Date
        const dateObject = new Date(inputDate);
        
        // Получение компонентов даты (день, месяц, год)
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        
        // Форматирование даты в нужный формат (например, DD.MM.YYYY)
        const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
        
        return formattedDate;
    };

    // Форматирование даты
    const formattedDate = formatDate(date);

    const maxLength = 1500;

    const trimmedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    

  return (
    <div className={styles.articlecard}>
        <div className={styles.card__header}>
            <div className={styles.articlecard__hederinfo}>
                <div className={styles.articlecard__info}>{formattedDate}
                <a href={props.url} className={styles.articlecard__info}>{props.info}</a>
                </div>
                <div className={styles.articlecard__title}>{props.title}
            <p className={styles.articlecard__desc}><span>{attributeText}</span></p>
                </div>
            </div>
            {/* <img className={styles.articlecard__image} src={props.img} ></img> */}
            
        </div>
        <div className={styles.articlecard__text}dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(trimmedText) }}/>
        <div className={styles.articlecard__footer}>
            <a href={props.btn} className={styles.articlecard__btn}>
            Читать в источнике  
            </a>
        <div className={styles.articlecard__footerinfo}>{props.footer} слов</div>
        </div>
        
    </div>
  )
}

