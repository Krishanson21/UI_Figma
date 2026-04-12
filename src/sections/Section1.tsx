import Image from "next/image";
import styles from "@/style/Section1.module.css"
import "@/app/globals.css"
export default function Section2() {
    return (
        <section className="bg-[#F1F5F9] overflow-hidden">
            <div className={styles.Header}>
                <div className={styles.ucontainer}>
                    <h1 className={styles.title}>
                        All the{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">tools</span>
                            <Image
                                src="/images/vector14.png"
                                alt="underline"
                                width={140}
                                height={10}
                                className={styles.vector}
                            />
                        </span>{" "}
                        that you need
                    </h1>
                    <p className={styles.para}>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. <br />
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
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