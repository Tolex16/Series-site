import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  const currentRoute= router.pathname

  return (
    <>
    <div className={styles.navbar}>
     <div className={styles.title}>
     <img className={styles.logo} src="/site logo.png"></img>
            <i class="bx">Tv Series</i>
     </div>

    
      <Link href="/home" legacyBehavior>
        <a className={currentRoute === "/home" ? "active" : "white"}>
           Home
        </a></Link>
      <Link href="/tvseries" legacyBehavior>
        <a className={currentRoute === "/tvseries" ? "active" : "white"}>
           Tv Series
        </a></Link>
      <Link href="/comingsoon" legacyBehavior>
        <a className={currentRoute === "/comingsoon" ? "active" : "white"}>
      Coming Soon
        </a></Link>
      <Link href="/news" legacyBehavior>
        <a className={currentRoute === "/news" ? "active" : "white"}>
      News
        </a></Link>
    </div> 
    </>
   
  )
}

export default Navbar;