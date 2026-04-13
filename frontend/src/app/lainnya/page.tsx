import React from 'react';
import Link from 'next/link';
import styles from './Lainnya.module.css';

const menuItems = [
  { name: 'Menu Utama', href: '/', isActive: false },
  { name: 'Dashboard', href: '/dashboard', isActive: false },
  { name: 'Kelas Saya', href: '/kelas-saya', isActive: false },
  { name: 'Materi Belajar', href: '/materi', isActive: false },
  { name: 'Lowongan Kerja', href: '/lowongan-kerja', isActive: false },
  { name: 'Progress Belajar', href: '/progress-belajar', isActive: false },
  { name: 'Sertifikat', href: '/sertifikat', isActive: false },
  { name: 'Lainnya', href: '/lainnya', isActive: true },
  { name: 'Pengaturan', href: '/pengaturan', isActive: false },
];

const settings = [
  { label: 'Pengaturan Akun', description: 'Ubah password, email, dll' },
  { label: 'Notifikasi', description: 'Kelola pemberitahuan' },
  { label: 'Bahasa', description: 'Pilih bahasa aplikasi' },
  { label: 'Bantuan', description: 'FAQ & support' },
  { label: 'Tentang Aplikasi', description: 'Versi & informasi' },
];

export default function LainnyaPage() {
  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <span className={styles.logoIcon}>🎓</span>
          </div>
          <div>
            <p className={styles.brandLabel}>LPK</p>
            <p className={styles.brandName}>MUGIWARA</p>
          </div>
        </div>

        <nav className={styles.navMenu}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.navItem} ${item.isActive ? styles.active : ''}`}>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Lainnya</h1>
            <p className={styles.pageSubtitle}>Pengaturan dan informasi akun kamu</p>
          </div>
        </header>

        <section className={styles.profileCard}>
          <div className={styles.profileInfo}>
            <div className={styles.profileAvatar} />
            <div>
              <p className={styles.profileName}>Jacqueline Wright</p>
              <p className={styles.profileStatus}>Peserta Aktif • Level N5</p>
            </div>
          </div>
          <Link href="/pengaturan" className={styles.editButton}>Edit Profil</Link>
        </section>

        <section className={styles.settingsCard}>
          {settings.map((item) => (
            <div key={item.label} className={styles.settingRow}>
              <div>
                <p className={styles.settingLabel}>{item.label}</p>
                <p className={styles.settingDescription}>{item.description}</p>
              </div>
              <span className={styles.settingArrow}>›</span>
            </div>
          ))}
        </section>

        <section className={styles.actionsSection}>
          <Link href="/auth" className={styles.logoutButton}>Logout</Link>
          <button className={styles.deleteButton}>Hapus Akun</button>
        </section>
      </main>
    </div>
  );
}
