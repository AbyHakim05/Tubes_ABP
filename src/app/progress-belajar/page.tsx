import Link from 'next/link';
import styles from './ProgressBelajar.module.css';

const progressItems = [
  { label: 'Bahasa Jepang', value: 72, color: styles.redBar },
  { label: 'Skill Kerja', value: 58, color: styles.blueBar },
  { label: 'Percakapan', value: 48, color: styles.greenBar },
  { label: 'Persiapan Ujian JLPT', value: 35, color: styles.purpleBar },
];

export default function ProgressBelajarPage() {
  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <span style={{ fontSize: '1.8rem' }}>🎓</span>
            <span className={styles.logoText}>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
          </div>
        </div>

        <nav className={styles.menuList}>
          <Link href="/" className={styles.menuItem}>Menu Utama</Link>
          <Link href="/dashboard" className={styles.menuItem}>Dashboard</Link>
          <Link href="/kelas-saya" className={styles.menuItem}>Kelas Saya</Link>
          <Link href="/materi" className={styles.menuItem}>Materi Belajar</Link>
          <Link href="/lowongan-kerja" className={styles.menuItem}>Lowongan Kerja</Link>
          <Link href="/progress-belajar" className={`${styles.menuItem} ${styles.active}`}>Progress Belajar</Link>
          <Link href="/sertifikat" className={styles.menuItem}>Sertifikat</Link>
          <Link href="/lainnya" className={styles.menuItem}>Lainnya</Link>
          <Link href="/pengaturan" className={styles.menuItem}>Pengaturan</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <p className={styles.sectionLabel}>Progress Belajar</p>
            <h1>Pantau perkembangan belajar kamu</h1>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari topik..." />
          </div>
        </header>

        <div className={styles.statsRow}>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Total Progress</p>
            <p className={styles.statValue}>70%</p>
            <p className={styles.statNote}>+5% minggu ini</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Kursus Aktif</p>
            <p className={styles.statValue}>3</p>
            <p className={styles.statNote}>Sedang berjalan</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Waktu Belajar</p>
            <p className={styles.statValue}>12 Jam</p>
            <p className={styles.statNote}>Minggu ini</p>
          </article>
        </div>

        <section className={styles.progressSection}>
          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <h2>Detail Progress</h2>
            </div>
            <div className={styles.progressList}>
              {progressItems.map((item) => (
                <div key={item.label} className={styles.progressRow}>
                  <div className={styles.progressInfo}>
                    <span className={styles.progressBullet}></span>
                    <span>{item.label}</span>
                  </div>
                  <span className={styles.progressValue}>{item.value}%</span>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressFill} ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.goalCard}>
            <p className={styles.goalLabel}>Target Belajar</p>
            <h2>Capai level N3 dalam 6 bulan</h2>
            <div className={styles.goalTrack}>
              <div className={styles.goalFill} style={{ width: '60%' }} />
            </div>
            <p className={styles.goalNote}>60% menuju target</p>
          </div>
        </section>
      </main>
    </div>
  );
}
