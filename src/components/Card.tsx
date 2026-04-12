import styles from "@/components/card.module.css"
export default function Card({ type, title, description, }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.type} ${styles[type]}`}>
        {type}
      </div>
      <div className={styles.con}>
        <h1 className={styles.title} >{title}</h1>
        <p className={styles.para}>{description}</p>
      </div>
      <button className={styles.button}>
        Take Lesson
      </button>
    </div>
  );

}
