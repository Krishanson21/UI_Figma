import styles from "@/components/card.module.css"

type CardProps = {
  type: string;
  title: string;
  description: string;
};

export default function Card({ type, title, description}: CardProps) {
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
