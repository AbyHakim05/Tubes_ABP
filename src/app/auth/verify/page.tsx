import React from 'react';
import styles from './Verify.module.css';
import Link from 'next/link';

export default function VerifyPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className={styles.logoContent}>
            <span className={styles.logoIcon}>🎓</span>
            <span className={styles.logoText}><span>LPK</span> MUGIWARA</span>
          </div>
        </Link>
      </div>

      <div className={styles.verifyCard}>
        <h2 className={styles.title}>Verifikasi</h2>
        
        <input 
          type="text" 
          placeholder="Kode" 
          className={styles.input} 
        />
        
        <p className={styles.resendText}>
          Kirim Ulang Kode: (Waktu Mundur)
        </p>
      </div>
    </div>
  );
}
