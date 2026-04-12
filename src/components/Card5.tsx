import styles from "@/components/card5.module.css"
import Image from "next/image";
export default function Card({ para, image, name, job }) {
    return (
        <div className={styles.container}>
            <div className={styles.para}>
                {para}
            </div>
            <div className={styles.con}>
                <Image
                    src={image}
                    alt="underline"
                    width={64}
                    height={64}
                    className={styles.image}
                />
                <div className={styles.con2}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.job}>{job}</p>
                </div>
            </div>
        </div>
    );

}
