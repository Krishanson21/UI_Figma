import Image from "next/image";
import styles from "@/style//Section7.module.css";

export default function Section8() {
    return (
        <section className={styles.section}>
            <Image
                src="/images/sec8-bg.png"
                alt="background"
                fill
                className={styles.desktopBg}
            />
            <Image
                src="/images/mobile-sec8.png"
                alt="background"
                fill
                className={styles.mobileBg}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Join a world of learning
                </h2>
                <p className={styles.para}>
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    <br />
                    Risus elit et fringilla habitant ut facilisi.
                </p>

                <button className={styles.button}>
                    Sign Up Now
                </button>
            </div>

        </section>
    );
}