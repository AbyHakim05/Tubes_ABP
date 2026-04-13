import React from 'react';
import Link from 'next/link';
import styles from './Materi.module.css';

const menuItems = [
  { name: 'Menu Utama', href: '/', isActive: false },
  { name: 'Dashboard', href: '/dashboard', isActive: false },
  { name: 'Kelas Saya', href: '/kelas-saya', isActive: false},
  { name: 'Materi Belajar', href: '/materi', isActive: true },
  { name: 'Lowongan Kerja', href: '/lowongan-kerja', isActive: false },
  { name: 'Progress Belajar', href: '/progress-belajar', isActive: false },
  { name: 'Sertifikat', href: '/sertifikat', isActive: false },
  { name: 'Lainnya', href: '/lainnya', isActive: false },
  { name: 'Pengaturan', href: '/pengaturan', isActive: false },
];

const MateriPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles['logo-section']}>
          <div className={styles.logo}>
            <span style={{ fontSize: '1.8rem' }}>🎓</span>
            <span className={styles.logoText}>LPK <span className={styles.logoHighlight}>MUGIWARA</span></span>
          </div>
        </div>

        <nav className={styles['nav-menu']}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${styles['nav-item']} ${item.isActive ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className={styles['main-content']}>
        <header className={styles.header}>
          <h2 className={styles['page-title']}>Materi Belajar</h2>
          <div className={styles['search-bar']}>
            <input type="text" placeholder="Cari pekerjaan..." />
          </div>
        </header>

        <div className={styles['hero-banner']}>
          <h3>Materi Belajar</h3>
          <p>Akses semua materi bahasa & kerja Jepang</p>
          <button className={styles['btn-start']}>Mulai</button>
        </div>

        <div className={styles['filter-group']}>
          {['semua', 'N5', 'Speaking', 'Skill'].map((filter, index) => (
            <button
              key={index}
              className={`${styles['filter-btn']} ${filter === 'semua' ? styles.active : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles['cards-grid']}>
          <div className={styles.card}>
            <div className={styles['card-header']}>
              <div>
                <h4>Bahasa Jepang Dasar</h4>
                <p className={styles['sub-text']}>Hiragana & Katakana</p>
              </div>
              <span className={`${styles.badge} ${styles.n5}`}>N5</span>
            </div>
            <div className={styles['progress-section']}>
              <div className={styles['progress-labels']}>
                <span>Progress</span>
                <span>60%</span>
              </div>
              <div className={styles['progress-bar-bg']}>
                <div className={`${styles['progress-fill']} ${styles.orange}`} style={{ width: '60%' }}></div>
              </div>
            </div>
            <button className={styles['btn-continue']}>Lanjutkan</button>
          </div>

          <div className={`${styles['card-highlight']} ${styles['orange-bg']}`}>
            <h4>Program JLPT</h4>
            <p>Target N3 🚀</p>
          </div>

          <div className={styles.card}>
            <div className={styles['card-header']}>
              <div>
                <h4>Percakapan Sehari-hari</h4>
                <p className={styles['sub-text']}>Latihan komunikasi</p>
              </div>
              <span className={`${styles.badge} ${styles.speaking}`}>Speaking</span>
            </div>
            <div className={styles['progress-section']}>
              <div className={styles['progress-labels']}>
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div className={styles['progress-bar-bg']}>
                <div className={`${styles['progress-fill']} ${styles.blue}`} style={{ width: '45%' }}></div>
              </div>
            </div>
            <button className={styles['btn-continue']}>Lanjutkan</button>
          </div>

          <div className={`${styles['card-highlight']} ${styles['white-bg']}`}>
            <h4 className={styles['text-black']}>Total Progress</h4>
            <p className={styles['text-gray']}>70%</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles['card-header']}>
              <div>
                <h4>Skill Kerja Jepang</h4>
                <p className={styles['sub-text']}>Etika & budaya kerja</p>
              </div>
              <span className={`${styles.badge} ${styles.skill}`}>Skill</span>
            </div>
            <div className={styles['progress-section']}>
              <div className={styles['progress-labels']}>
                <span>Progress</span>
                <span>30%</span>
              </div>
              <div className={styles['progress-bar-bg']}>
                <div className={`${styles['progress-fill']} ${styles.green}`} style={{ width: '30%' }}></div>
              </div>
            </div>
            <button className={styles['btn-continue']}>Lanjutkan</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MateriPage;