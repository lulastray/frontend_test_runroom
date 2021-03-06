import Link from 'next/link';

import Logo from '../../public/logo.svg';
import Behance from '../../public/behance.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexContainer}>
        <div className={styles.footerFlex}>
          <Link href="/">
            <a>
              <Logo className={styles.logo} />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/">
                  <a className={styles.link}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className={styles.link}>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={styles.link}>Contáctame</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className={styles.socialLogos}>
            <li>
              <Behance />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
