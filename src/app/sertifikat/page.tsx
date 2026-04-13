import Link from 'next/link';
import styles from './Sertifikat.module.css';

// Data Mockup Sertifikat
const certificates = [
  {
    id: 1,
    title: 'Bahasa Jepang N5',
    institution: 'LPK Mugiwara',
    date: '10 April 2026', // Menggunakan tahun 2026 sesuai konteks
    status: 'Lulus',
    colorClass: styles.cardRed,
  },
  {
    id: 2,
    title: 'Percakapan Jepang',
    institution: 'LPK Mugiwara',
    date: '20 Mei 2026',
    status: 'Lulus',
    colorClass: styles.cardBlue,
  },
  {
    id: 3,
    title: 'Skill Kerja Jepang',
    institution: 'LPK Mugiwara',
    date: '2 Juni 2026',
    status: 'Lulus',
    colorClass: styles.cardGreen,
  },
];

export default function SertifikatPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* SIDEBAR (Diambil dari kode Anda) */}
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
          <Link href="/progress-belajar" className={styles.menuItem}>Progress Belajar</Link>
          <Link href="/sertifikat" className={`${styles.menuItem} ${styles.active}`}>Sertifikat</Link>
          <Link href="/lainnya" className={styles.menuItem}>Lainnya</Link>
          <Link href="/pengaturan" className={styles.menuItem}>Pengaturan</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        
        {/* Header (Mengikuti struktur header Anda) */}
        <header className={styles.pageHeader}>
          <div>
            <h1>Sertifikat Saya</h1>
            <p className={styles.pageSubtitle}>Kumpulan sertifikat hasil belajar kamu 🏆</p>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari Sertifikat..." />
          </div>
        </header>

        {/* Stats Section (Diadaptasi dari statsRow Anda) */}
        <div className={styles.statsRow}>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Total Sertifikat</p>
            <p className={`${styles.statValue} ${styles.textRed}`}>4</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Level Tertinggi</p>
            <p className={styles.statValue}>N5</p>
          </article>
          <article className={styles.statCard}>
            <p className={styles.statLabel}>Status</p>
            <p className={`${styles.statValue} ${styles.textGreen}`}>Aktif</p>
          </article>
        </div>

        {/* Certificates Grid */}
        <section className={styles.certificatesGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={`${styles.certTop} ${cert.colorClass}`}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certInstitution}>{cert.institution}</p>
              </div>
              <div className={styles.certBottom}>
                <div className={styles.certInfo}>
                  <p className={styles.certDateLabel}>Tanggal Lulus</p>
                  <p className={styles.certDate}>{cert.date}</p>
                  <span className={styles.certBadge}>{cert.status}</span>
                </div>
                <button className={styles.btnDownload}>Download</button>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}