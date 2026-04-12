import { Menu } from "lucide-react";
import Image from "next/image";
import styles from "@/components/navbar.module.css"
import "@/app/globals.css"

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className={styles.container}>

        <div className={styles.lcontainer}>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={103}
            height={35}
            priority
          />

          <ul className={styles.links}>
            <li className={styles.item}>Products</li>
            <li className={styles.item}>Solutions</li>
            <li className={styles.item}>Pricing</li>

            <li className={styles.drop}>
              Resources
              <Image
                src="/icons/chevron-down.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>

        <div className={styles.rcontainer}>
          <div className={styles.buttons}>
            <button className={styles.login}>Log In</button>
            <button className={styles.signup}>Sign Up Now</button>
          </div>

          <div className={styles.menu}>
            <Menu size={28} />
          </div>
        </div>

      </div>
    </nav>
  );
}