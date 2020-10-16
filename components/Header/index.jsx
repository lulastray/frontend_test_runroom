import Link from 'next/link';

import { useAppContext } from '../../contexts/AppContext';
import Cross from '../../public/cross.svg';
import Menu from '../../public/menu.svg';
import Logo from '../../public/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { menu, toggleContactModal, toggleMenu } = useAppContext();

  const handleContactClick = () => {
    if (menu) {
      toggleMenu();
    }
    toggleContactModal();
  };

  return (
    <header className={`container ${styles.header} ${menu ? styles.fullScreen : ''}`}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={`${styles.nav} ${menu ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a className={styles.link} onClick={() => menu && toggleMenu()}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className={styles.link} onClick={() => menu && toggleMenu()}>
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <a className={styles.link} onClick={handleContactClick}>
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.trigger}>
        {menu && <Cross className={styles.cross} onClick={toggleMenu} />}
        {!menu && <Menu className={styles.menu} onClick={toggleMenu} />}
      </div>
    </header>
  );
};

export default Header;
