import Image from 'next/image'
import styles from './page.module.scss'
import Info from '@/components/Info';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.info}>
            <Info />
          </div>

          <div className={styles.form}>
            <Form />
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    </>
  );
}
