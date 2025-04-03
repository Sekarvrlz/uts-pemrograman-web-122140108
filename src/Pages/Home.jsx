const articles = [
  { 
    title: "Dampak Sampah Plastik", 
    content: "Sampah plastik dapat mencemari lingkungan...",
    link: "https://www.alodokter.com/dampak-sampah-plastik-bagi-lingkungan-dan-kesehatan-manusia" 
  },
  { 
    title: "Inovasi Pengelolaan Sampah", 
    content: "Teknologi dapat membantu dalam daur ulang...",
    link: "https://www.liputan6.com/citizen6/read/5133774/bisa-ditiru-4-ide-inovatif-pengelolaan-sampah-dari-berbagai-negara" 
  },
  { 
    title: "Kebijakan Pemerintah", 
    content: "Pemerintah menerapkan kebijakan ketat...",
    link: "https://waste4change.com/blog/5-peraturan-limbah-indonesia/" 
  },
  { 
    title: "Daur Ulang Sampah Organik", 
    content: "Sampah organik bisa didaur ulang dengan mudah...",
    link: "https://waste4change.com/blog/daur-ulang-sampah/" 
  },
  { 
    title: "Sistem Informasi Pengelolaan Sampah", 
    content: "Platform untuk mengelola data sampah nasional.",
    link: "https://sipsn.menlhk.go.id/sipsn/"
  },
  { 
    title: "Mall Sampah: Inovasi Digital", 
    content: "Marketplace untuk jual beli sampah daur ulang.",
    link: "https://www.mallsampah.com/"
  },
  { 
    title: "Portal Pengelolaan Sampah", 
    content: "Akses data dan kebijakan tentang pengelolaan sampah.",
    link: "https://simba.menlhk.go.id/portal/"
  },
  { 
    title: "Sampah Kita Jabar", 
    content: "Inisiatif daerah dalam menangani sampah.",
    link: "https://sampahkita.jabarprov.go.id/"
  }
];

const Home = () => {
  return (
    <div className="container">
      <div className="marquee-container">
        <h1 className="marquee-text">Artikel Terkait</h1>
      </div>

      {/* Grid Artikel dalam 2 Kolom */}
      <div className="content-wrapper">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-content">{article.content}</p>
            <a href={article.link} className="article-link" target="_blank" rel="noopener noreferrer">
              Baca selengkapnya
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;