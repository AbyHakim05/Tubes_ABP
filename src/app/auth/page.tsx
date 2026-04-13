import React from 'react';
import styles from './Auth.module.css';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        {/* The background image is handled by CSS */}
      </div>
      
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
            <h2 className={styles.title}>Login</h2>
          
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                placeholder="Username" 
                className={styles.input} 
                />
            </div> 
          
          <div className={styles.inputGroup}>
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.input} 
            />
          </div>

         
            <Link href="/dashboard" className={styles.submitBtn}>
              Login
            </Link>

          <div className={styles.links}>
            <span className={styles.registerText}>Belum Memiliki Akun?</span>
            <span className={styles.orDivider}>Atau</span>
            <Link href="/auth/register">
              <span className={styles.registerLink}>Daftar</span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
