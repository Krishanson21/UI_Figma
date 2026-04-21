import Image from "next/image";
import styles from "@/style/Section1.module.css"
import "@/app/globals.css"
import data from "@/app/data/headers.json"
export default function Section2() {
    return (
        <section className="bg-[#F1F5F9] overflow-hidden">
            <div className={styles.Header}>
                <div className={styles.ucontainer}>
                    <h1 className={styles.title}>
                        <span>{data[1].header[0]}{" "}</span>
                        <span className={styles.line}>
                            <span className={styles.head}>{data[1].header[1]}</span>
                            <Image
                                src="/images/vector14.png"
                                alt="underline"
                                width={140}
                                height={20}
                                className={styles.vector}
                            />
                        </span>
                        {data[1].header[2]}
                    </h1>
                    <p className={styles.para}>{data[1]?.para?.[0]} <br /> {data[1]?.para?.[1]}</p>
                </div>
                <div className={styles.blobs}>
                    <Image
                        src="/images/Blobl.png"
                        alt="left blob"
                        width={561}
                        height={652}
                        className={styles.blobl}
                    />
                    <Image
                        src="/images/Blobr.png"
                        alt="right blob"
                        width={561}
                        height={652}
                        className={styles.blobr}
                    />
                </div>
                <div className={styles.colimage}>
                    <Image
                        src="/images/screen.png"
                        alt="scren"
                        width={561}
                        height={652}
                        className={styles.screen}
                    />
                    <Image
                        src="/images/Lines.png"
                        alt="lines"
                        width={1040}
                        height={50}
                        className={styles.lines}
                    />
                    <div className={styles.icon}>
                        <Image  className={styles.app} src="/icons/app1.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app2.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app3.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app4.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app5.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app6.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app7.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app8.png" alt="" width={64} height={64} />
                        <Image className={styles.app} src="/icons/app9.png" alt="" width={64} height={64} />
                    </div>
                </div>
            </div>
        </section>
    );
}