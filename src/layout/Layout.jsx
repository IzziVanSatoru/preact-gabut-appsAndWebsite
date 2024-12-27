import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
      <style scoped>
        {`
          .layout-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Mengisi seluruh tinggi layar */
          }

          .content {
            flex-grow: 1; /* Membuat konten utama mengisi ruang yang tersedia */
            padding: 2rem;
          }

          footer {
            margin-top: auto; /* Footer selalu berada di bawah */
            background-color: #333;
            color: white;
            padding: 0.5rem;
            text-align: center;
            font-size: 0.875rem; /* Ukuran kecil */
            width: 100%; /* Mengisi lebar halaman */
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
