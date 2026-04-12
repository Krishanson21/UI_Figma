import Image from "next/image";
import styles from "@/style/Section3.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Section3() {
    return (
        <section className="bg-white">
            <div className={styles.Header}>
                <div className={styles.lcontainer}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>
                            <span className="relative inline-block">
                                <span>
                                    Meet international
                                </span>
                                <Image
                                    src="/icons/Aero.png"
                                    alt="underline"
                                    width={64}
                                    height={64}
                                    className={styles.aero}
                                />
                            </span>
                            {" "}students & teachers
                        </h1>
                        <p className={styles.para}>{data[3].para}</p>
                        <span className={styles.link}><a href=""></a>Find more about the app ➞</span>
                    </div>
                </div>

                <div className={styles.rcontainer}>
                    <div className={styles.image}>
                        <Image
                            src="/images/Col.png"
                            alt="loding"
                            width={624}
                            height={544}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}