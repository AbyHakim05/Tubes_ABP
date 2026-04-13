import React from 'react';
import styles from './Register.module.css';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      
      <div className={styles.formSection}>
        <div className={styles.logoWrapper}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className={styles.logoContent}>
              <span className={styles.logoIcon}>🎓</span>
              <span className={styles.logoText}><span>LPK</span> MUGIWARA</span>
            </div>
          </Link>
        </div>

        <div className={styles.loginCard}>
          {/* Using Register for clarity, even though mockup says Login internally */}
          <h2 className={styles.title}>Register</h2>
          
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Nama" 
              className={styles.input} 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input} 
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Domisili" 
              className={styles.input} 
            />
          </div>

          {/* I added a Daftar button because a form needs a submit action, to provide good UX */}
          <a href="verify">
            <button className={styles.submitBtn}>Daftar</button>
          </a>
          

          <div className={styles.links}>
            <span className={styles.registerText}>Sudah Memiliki Akun?</span>
            <Link href="/auth" style={{ textDecoration: 'none', color: 'currentcolor' }}>
              <span className={styles.registerLink}>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
