"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import logo from "/public/slydo_logo.png";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  const toggleMenu = (e: any) => {
    e.preventDefault();
    const mobileMenuItems = document.getElementById("mobileMenuItems") as HTMLElement;
    mobileMenuItems.classList.toggle(`${styles.active}`);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
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

        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <Menu />
        </div>
      </div>

      <div className={`${styles.menu} ${styles.mobileMenuItems}`} id="mobileMenuItems">
        <Link href="/">Payment</Link>
        <Link href="/">Business</Link>
        <Link href="/">Socials</Link>
        <Link href="/">Developers</Link>

        <div className={styles.buttons}>
          <button>Create Account</button>
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;