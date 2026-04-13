import Link from 'next/link';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles['logo-section']}>
          <div className={styles.logo}>
            <span style={{ fontSize: '1.8rem' }}>🎓</span>
            <span className={styles.logoText}>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
          </div>
        </div>
        <nav className={styles.navList}>
          <Link href="/dashboard" className={styles.navItemActive}>Dashboard</Link>
          <Link href="/kelas-saya" className={styles.navItem}>Kelas Saya</Link>
          <Link href="/materi" className={styles.navItem}>Materi Belajar</Link>
          <Link href="/lowongan-kerja" className={styles.navItem}>Lowongan Kerja</Link>
          <Link href="/progress-belajar" className={styles.navItem}>Progress Belajar</Link>
          <Link href="/sertifikat" className={styles.navItem}>Sertifikat</Link>
          <Link href="/lainnya" className={styles.navItem}>Lainnya</Link>
          <Link href="/pengaturan" className={styles.navItem}>Pengaturan</Link>
          <Link href="/auth" className={styles.navItem}>Logout</Link>
        </nav>
        <div className={styles.profileCard}>
          <div className={styles.profileImage} />
          <div>
            <div className={styles.profileName}>Jacqueline Wright</div>
            <div className={styles.profileRole}>Peserta Pelatihan</div>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topBar}>
          <div>
            <p className={styles.greeting}>Selamat Datang, Jacqueline! 👋</p>
            <p className={styles.subtext}>Teruskan perkembangan skill dan persiapkan diri untuk bekerja di Jepang.</p>
          </div>
          <div className={styles.userMenu}>
            <span className={styles.notification}>🔔</span>
            <span className={styles.userName}>Jacqueline Wright</span>
          </div>
        </header>

        <section className={styles.cardsSection}>
          <div className={styles.cardStat}> 
            <h3>Level Bahasa Jepang</h3>
            <p>N5 - Dalam proses</p>
          </div>
          <div className={styles.cardStat}>
            <h3>Progress Belajar</h3>
            <p>78% selesai</p>
          </div>
          <div className={styles.cardStat}>
            <h3>Skill & CV</h3>
            <p>Dokumen siap diperbarui</p>
          </div>
          <div className={styles.cardStat}>
            <h3>Jadwal Kegiatan</h3>
            <p>2 acara tersisa minggu ini</p>
          </div>
        </section>

        <section className={styles.activeClassesSection}>
          <div className={styles.sectionHeader}>
            <h2>Kelas Aktif</h2>
            <span>3 kursus sedang berlangsung</span>
          </div>
          <div className={styles.classesGrid}>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Bahasa Jepang Dasar</div>
              <div className={styles.classMeta}>Teruskan latihan huruf dan percakapan sehari-hari.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Percakapan Sehari-hari</div>
              <div className={styles.classMeta}>Fokus pada praktik dialog dan listening.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
            <article className={styles.classCard}>
              <div className={styles.classTitle}>Skill/Karier Jepang</div>
              <div className={styles.classMeta}>Persiapan kerja dan budaya perusahaan Jepang.</div>
              <span className={styles.classStatus}>Sedang Berlangsung</span>
            </article>
          </div>
        </section>

        <section className={styles.progressSection}>
          <div className={styles.progressCard}>
            <div className={styles.cardHeader}>
              <h3>Progress Belajar</h3>
              <span>Perkembangan minggu ini</span>
            </div>
            <div className={styles.progressList}>
              <div className={styles.progressItem}>
                <span>Bahasa Jepang</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFill} style={{ width: '84%' }}/></div>
              </div>
              <div className={styles.progressItem}>
                <span>Skill Kerja</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFillBlue} style={{ width: '62%' }}/></div>
              </div>
              <div className={styles.progressItem}>
                <span>Persiapan Ujian JLPT</span>
                <div className={styles.progressBarBackground}><div className={styles.progressBarFillGreen} style={{ width: '48%' }}/></div>
              </div>
            </div>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.cardHeader}>
              <h3>Jadwal Kegiatan</h3>
              <span>April 2026</span>
            </div>
            <div className={styles.timeline}>
              <div className={styles.timelineRow}>
                <span className={styles.timelineTag}>Pelatihan</span>
                <div>
                  <strong>Senin, 18 Apr</strong>
                  <p>Diskusi materi JLPT dan latihan tanya jawab.</p>
                </div>
              </div>
              <div className={styles.timelineRow}>
                <span className={styles.timelineTagSecondary}>Webinar</span>
                <div>
                  <strong>Rabu, 20 Apr</strong>
                  <p>Sesi persiapan interview kerja di Jepang.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.announcementSection}>
          <div className={styles.announcementCard}>
            <div>
              <p className={styles.announcementTitle}>Pengumuman Terbaru</p>
              <p>Pendaftaran Program Kerja Jepang Batch Baru Telah Dibuka! Segera daftar sebelum kuota penuh.</p>
            </div>
            <Link href="#" className={styles.detailButton}>Lihat Detail</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
