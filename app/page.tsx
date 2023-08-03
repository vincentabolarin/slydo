import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.info}>
          Info
        </div>

        <div className={styles.form}>
          Form
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
