import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import logo from "/public/slydo_logo.png";

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" width={100}  />
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href="/">Payment</Link>
          <Link href="/">Business</Link>
          <Link href="/">Socials</Link>
          <Link href="/">Developers</Link>

          <div className={styles.buttons}>
            <button>Create Account</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;