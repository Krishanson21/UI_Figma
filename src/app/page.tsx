import Header from "@/sections/Header";
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import Section6 from "@/sections/Section6";
import Section7 from "@/sections/Section7";
import Footer from "@/sections/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/app/pages.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.page}>
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </main>
  );
}