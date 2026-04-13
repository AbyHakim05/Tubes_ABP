import Link from 'next/link';
import styles from './LowonganKerja.module.css';

const jobs = [
  {
    title: 'Teknisi Produksi Jepang',
    company: 'PT. Sakura Industrial',
    type: 'Full Time',
    location: 'Jepang',
    deadline: '31 Mei 2026',
    badge: 'Baru',
  },
  {
    title: 'Operator Mesin CNC',
    company: 'Nihon Tech',
    type: 'Contract',
    location: 'Jepang',
    deadline: '10 Juni 2026',
    badge: 'Urgent',
  },
  {
    title: 'Customer Service Jepang',
    company: 'Hanami Group',
    type: 'Part Time',
    location: 'Jepang',
    deadline: '15 Juni 2026',
    badge: 'Rekomendasi',
  },
];

export default function LowonganKerjaPage() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <div className={styles['logo-section']}>
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
          <Link href="/lowongan-kerja" className={`${styles.menuItem} ${styles.active}`}>Lowongan Kerja</Link>
          <Link href="/progress-belajar" className={styles.menuItem}>Progress Belajar</Link>
          <Link href="/sertifikat" className={styles.menuItem}>Sertifikat</Link>
          <Link href="/lainnya" className={styles.menuItem}>Lainnya</Link>
          <Link href="/pengaturan" className={styles.menuItem}>Pengaturan</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <p className={styles.sectionLabel}>Lowongan Kerja</p>
            <h1>Temukan peluang kerja di Jepang</h1>
          </div>
          <div className={styles.searchBox}>
            <input type="search" placeholder="Cari lowongan..." />
          </div>
        </header>

        <div className={styles.filterPanel}>
          {['Semua', 'Teknisi', 'Admin', 'Skill', 'Full Time'].map((filter) => (
            <button key={filter} className={filter === 'Semua' ? `${styles.filterBtn} ${styles.activeFilter}` : styles.filterBtn}>
              {filter}
            </button>
          ))}
        </div>

        <section className={styles.cardsSection}>
          <div className={styles.statisticsCard}>
            <p className={styles.cardLabel}>Lowongan Premium</p>
            <h2>10+ peluang kerja terbaru</h2>
            <p>Segera ajukan CV dan persiapkan dokumenmu.</p>
            <Link href="#" className={styles.detailButton}>Lihat Detail</Link>
          </div>

          <div className={styles.infoCard}>
            <p className={styles.cardLabel}>Tips Lolos</p>
            <ul className={styles.tipList}>
              <li>Perbarui CV & surat lamaran</li>
              <li>Persiapkan bahasa Jepang dasar</li>
              <li>Kenali budaya kerja Jepang</li>
            </ul>
          </div>
        </section>

        <section className={styles.jobListSection}>
          {jobs.map((job) => (
            <article key={job.title} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div>
                  <p className={styles.jobTitle}>{job.title}</p>
                  <p className={styles.company}>{job.company} · {job.type}</p>
                </div>
                <span className={styles.badge}>{job.badge}</span>
              </div>
              <div className={styles.jobBody}>
                <p>{job.location}</p>
                <p>Batas lamaran: {job.deadline}</p>
              </div>
              <div className={styles.jobActions}>
                <button className={styles.applyButton}>Lihat Detail</button>
                <button className={styles.saveButton}>Simpan</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
