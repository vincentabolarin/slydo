import styles from "../styles/footer.module.scss";

const Footer = () => {
    return (
      <>
        <div className={styles.container}>
          <section className={styles.main}>
            <p className={styles.name}>Slydo</p>
            <div className={styles.others}>
              <div className={styles.other}>
                <p className={`font-small-plus ${styles.heading}`}>Company</p>
                <p className="font-small">About</p>
                <p className="font-small">FAQs</p>
                <p className="font-small">Privacy Policy</p>
                <p className="font-small">Terms & Conditions</p>
              </div>
              <div className={styles.other}>
                <p className={`font-small-plus ${styles.heading}`}>Products</p>
                <p className="font-small">Business</p>
                <p className="font-small">Chat</p>
                <p className="font-small">Moments</p>
                <p className="font-small">Yarn</p>
                <p className="font-small">Blog</p>
              </div>
              <div className={styles.other}>
                <p className={`font-small-plus ${styles.heading}`}>Developer</p>
                <p className="font-small">API Documentation</p>
                <p className="font-small">API Status</p>
                <p className="font-small">Changelog</p>
                <p className="font-small">Developer Blog</p>
              </div>
              <div className={styles.other}>
                <p className={`font-small-plus ${styles.heading}`}>
                  Social Media
                </p>
                <p className="font-small">Twitter</p>
                <p className="font-small">Facebook</p>
                <p className="font-small">Instagram</p>
                <p className="font-small">LinkedIn</p>
                <p className="font-small">YouTube</p>
              </div>
            </div>
          </section>
          <section className={styles.copyright}>
            <p className="font-small-minus">&copy; 2022, slydo Inc.</p>
            <p className="font-small-minus">Privacy Policy</p>
          </section>
        </div>
      </>
    );
}
 
export default Footer;