import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <div className='container'>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link href='/about-me'>
              <p>About Me</p>
            </Link>
          </div>
          <div className={styles.col}>
            <Link href='/'>
              <Image
                src='/images/my-logo.png'
                alt='My Logo'
                width={75}
                height={75}
              />
            </Link>
          </div>
          <div className={styles.col}>
            <Link href='/about-me'>
              <p>About Me</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
