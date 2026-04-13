import Image from "next/image";
import styles from "@/style/Section2.module.css"
import "@/app/globals.css"
import Card from "@/components/Card"
import cards from "@/app/data/cards.json"
import data from "@/app/data/headers.json"
export default function Section2() {
    return (
        <section className="bg-white">
            <div className={styles.Header}>
                <div className={styles.lcontainer}>
                    <h1 className={styles.title}>
                        <span className="relative inline-block">
                            An{" "}
                            <span className="relative z-10">
                                all-in-one
                            </span>
                            <Image
                                src="/images/vector14.png"
                                alt="underline"
                                width={250.5}
                                height={12.4}
                                className={styles.vector}
                            />
                        </span>
                        {" "}app that makes it easier
                    </h1>
                    <p className={styles.para}>{data[2].para}</p>
                    <p className={styles.para}>✔ Est et in pharetra magna adipiscing ornare aliquam.</p>
                    <p className={styles.para}>✔ Tellus arcu sed consequat ac velit ut eu blandit.</p>
                    <p className={styles.para}>✔ Ullamcorper ornare in et egestas dolor orci.</p>
                    <span className={styles.link}><a href=""></a>Find more about the app ➞</span>
                </div>

                <div className={styles.rcontainer}>
                    <div className={styles.image}>
                        <Image
                            src="/images/Blob3.png"
                            alt="blob"
                            width={624}
                            height={544}
                            className={styles.blob3}
                        />
                        <Image
                            src="/images/Desktop.png"
                            alt="blob"
                            width={624}
                            height={844}
                            className={styles.desktop}
                        />
                        <div className={styles.cards}>
                            {cards.map((card, index) => (
                                <Card
                                    key={index}
                                    type={card.type}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}
