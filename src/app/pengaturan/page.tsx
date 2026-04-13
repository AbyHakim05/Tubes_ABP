import React from 'react';
import Link from 'next/link';
import styles from './Pengaturan.module.css';

const menuItems = [
  { name: 'Menu Utama', href: '/', isActive: false },
  { name: 'Dashboard', href: '/dashboard', isActive: false },
  { name: 'Kelas Saya', href: '/kelas-saya', isActive: false },
  { name: 'Materi Belajar', href: '/materi', isActive: false },
  { name: 'Lowongan Kerja', href: '/lowongan-kerja', isActive: false },
  { name: 'Progress Belajar', href: '/progress-belajar', isActive: false },
  { name: 'Sertifikat', href: '/sertifikat', isActive: false },
  { name: 'Lainnya', href: '/lainnya', isActive: false },
  { name: 'Pengaturan', href: '/pengaturan', isActive: true },
];

export default function PengaturanPage() {
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
            <h1 className={styles.pageTitle}>Pengaturan</h1>
            <p className={styles.pageSubtitle}>Atur akun dan preferensi belajar kamu</p>
          </div>
        </header>

        <section className={styles.cardSection}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardLabel}>Profil</p>
                <h2>Jacqueline Wright</h2>
              </div>
              <div className={styles.avatarCircle} />
            </div>
            <div className={styles.fieldRow}>
              <label>Nama Lengkap</label>
              <input type="text" defaultValue="Jacqueline Wright" />
            </div>
            <div className={styles.fieldRow}>
              <label>Email</label>
              <input type="email" defaultValue="jacqueline@example.com" />
            </div>
            <button className={styles.primaryButton}>Simpan Perubahan</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Keamanan</div>
            <div className={styles.fieldRow}>
              <label>Password Lama</label>
              <input type="password" placeholder="Masukkan password lama" />
            </div>
            <div className={styles.fieldRow}>
              <label>Password Baru</label>
              <input type="password" placeholder="Masukkan password baru" />
            </div>
            <button className={styles.secondaryButton}>Ubah Password</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Notifikasi</div>
            <div className={styles.toggleRow}>
              <span>Notifikasi email</span>
              <button className={styles.toggleButton}>Aktif</button>
            </div>
            <div className={styles.toggleRow}>
              <span>Pemberitahuan agenda</span>
              <button className={styles.toggleButton}>Aktif</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Preferensi</div>
            <div className={styles.fieldRow}>
              <label>Bahasa</label>
              <select>
                <option>Bahasa Indonesia</option>
                <option>English</option>
              </select>
            </div>
            <div className={styles.fieldRow}>
              <label>Tema</label>
              <select>
                <option>Terang</option>
                <option>Gelap</option>
              </select>
            </div>
          </div>

          <div className={styles.cardDanger}>
            <p className={styles.dangerTitle}>Danger Zone</p>
            <p className={styles.dangerText}>Keluar dari akun atau hapus akun secara permanen.</p>
            <Link href="/auth" className={styles.logoutButton}>Logout</Link>
            <button className={styles.deleteButton}>Hapus Akun</button>
          </div>
        </section>
      </main>
    </div>
  );
}
