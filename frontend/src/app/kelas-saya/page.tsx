import Link from 'next/link';
import styles from './KelasSaya.module.css';

export default function KelasSayaPage() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <span style={{ fontSize: '1.8rem' }}>🎓</span>
            <span className={styles.logoText}>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
          </div>
        </div>

        <nav className={styles.menuList}>
          <Link href="/dashboard" className={styles.menuItem}>Dashboard</Link>
          <Link href="/kelas-saya" className={`${styles.menuItem} ${styles.active}`}>Kelas Saya</Link>
          <Link href="/materi" className={styles.menuItem}>Materi Belajar</Link>
          <Link href="/lowongan-kerja" className={styles.menuItem}>Lowongan Kerja</Link>
          <Link href="/progress-belajar" className={styles.menuItem}>Progress Belajar</Link>
          <Link href="/sertifikat" className={styles.menuItem}>Sertifikat</Link>
          <Link href="/lainnya" className={styles.menuItem}>Lainnya</Link>
        </nav>

        <div className={styles.footerMenu}>
          <Link href="/pengaturan" className={styles.menuItem}>Pengaturan</Link>
          <Link href="/auth" className={styles.menuItem}>Logout</Link>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.sectionLabel}>Kelas Saya</p>
            <h1 className={styles.title}>Semua kursus aktif kamu</h1>
          </div>
          <div className={styles.searchWrapper}>
            <input type="search" placeholder="Cari kelas..." />
          </div>
        </div>

        <div className={styles.cardGrid}>
          <article className={styles.classCard}>
            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80)' }} />
            <div className={styles.cardBody}>
              <h2>Bahasa Jepang N5</h2>
              <p>Guru: Sensei Tanaka</p>
              <div className={styles.progressLabel}>Progress 71%</div>
              <div className={styles.progressTrack}><div className={styles.progressBar} style={{ width: '71%' }} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>

          <article className={styles.classCard}>
            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80)' }} />
            <div className={styles.cardBody}>
              <h2>Percakapan Jepang</h2>
              <p>Guru: Sensei Yuki</p>
              <div className={styles.progressLabel}>Progress 48%</div>
              <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barBlue}`} style={{ width: '48%' }} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>

          <article className={styles.classCard}>
            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80)' }} />
            <div className={styles.cardBody}>
              <h2>Skill Kerja Jepang</h2>
              <p>Guru: Sensei Sato</p>
              <div className={styles.progressLabel}>Progress 59%</div>
              <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barGreen}`} style={{ width: '59%' }} /></div>
              <button className={styles.cardButton}>Lanjutkan</button>
            </div>
          </article>
        </div>

        <section className={styles.progressSection}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Progress Belajar</h2>
              <span>Update hari ini</span>
            </div>
            <div className={styles.panelBody}>
              <div className={styles.progressItem}>
                <span>Bahasa Jepang</span>
                <div className={styles.progressTrack}><div className={styles.progressBar} style={{ width: '71%' }} /></div>
              </div>
              <div className={styles.progressItem}>
                <span>Skill Kerja</span>
                <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barBlue}`} style={{ width: '59%' }} /></div>
              </div>
              <div className={styles.progressItem}>
                <span>Percakapan</span>
                <div className={styles.progressTrack}><div className={`${styles.progressBar} ${styles.barGreen}`} style={{ width: '48%' }} /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
