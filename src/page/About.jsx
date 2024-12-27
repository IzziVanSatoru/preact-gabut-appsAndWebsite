import { useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
  useEffect(() => {
    gsap.from(".about-title", { duration: 1, opacity: 0, y: -50, ease: "power4.out" });
    gsap.from(".about-text", { duration: 1, opacity: 0, y: 50, ease: "power4.out", delay: 0.5 });
    gsap.from(".features li", { duration: 1, opacity: 0, x: -100, stagger: 0.3, ease: "power4.out", delay: 1 });
  }, []);

  return (
    <div className="about-page">
      <h1 className="about-title">Tentang Saya</h1>
      <p className="about-text">
        Halaman ini dibuat untuk memberikan sedikit gambaran tentang siapa saya. Saya adalah orang yang lebih suka menyendiri dan tidak terlalu banyak bergaul.
      </p>
      <div className="features">
        <h2>Kenapa Saya Cenderung Introvert?</h2>
        <ul>
          <li><strong>Anti Sosial:</strong> Saya merasa lebih nyaman beraktivitas sendiri, jauh dari keramaian. Berinteraksi dengan orang banyak membuat saya merasa kelelahan secara emosional.</li>
          <li><strong>Fokus di Diri Sendiri:</strong> Lebih banyak waktu untuk mengembangkan diri, belajar hal-hal baru, dan fokus pada passion saya tanpa gangguan sosial.</li>
          <li><strong>Mencari Ketenangan:</strong> Lingkungan yang tenang dan jauh dari kebisingan sosial sangat penting bagi saya untuk bisa berpikir jernih dan produktif.</li>

          {/* 3 New Features */}
          <li><strong>Digital Nomad Sejati:</strong> Dunia digital adalah panggung saya. Saya bisa bekerja dari mana saja, kapan saja. Saya percaya bahwa kebebasan adalah kunci untuk kreativitas.</li>
          <li><strong>Mindful Explorer:</strong> Saya selalu mencari cara untuk menjelajahi dunia, baik itu dengan cara membaca buku, mendengarkan podcast, atau sekadar berjalan-jalan ke tempat baru yang menenangkan.</li>
          <li><strong>Seniman dalam Diri:</strong> Dalam kesendirian, saya sering menemukan ide-ide kreatif yang unik. Saya percaya seni itu adalah cara terbaik untuk mengekspresikan diri dan melihat dunia dari perspektif berbeda.</li>
        </ul>
      </div>
      <style scoped>
        {`
          .about-page {
            background: linear-gradient(135deg, #ff7e5f, #feb47b);
            color: #fff;
            font-family: 'Roboto', sans-serif;
            text-align: center;
            padding: 2rem;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
          }

          .about-title {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 1rem;
            text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
          }

          .about-text {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
            color: #fffae3;
          }

          .features {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 1.5rem;
            max-width: 80%;
            margin: 0 auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
            transform: rotateY(15deg);
          }

          .features h2 {
            font-size: 2rem;
            color: #fffae3;
            margin-bottom: 1rem;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          }

          .features ul {
            list-style-type: none;
            padding: 0;
          }

          .features li {
            margin-bottom: 12px;
            font-size: 1rem;
            line-height: 1.5;
            color: #fff;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            transform: translateX(-20px);
          }

          .features li strong {
            color:rgb(82, 82, 82);
          }

          .features li:hover {
            transform: translateX(0) scale(1.05);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default About;
