const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
    <style scoped>
      {`
        .card {
          border: 1px solid #ddd;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 12px;
          background: linear-gradient(145deg, #f7f7f7, #e0e0e0);
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.5);
          transform: perspective(1500px) rotateX(5deg) rotateY(5deg);
          transition: all 0.3s ease-in-out;
          width: 100%;
          max-width: 400px; /* Membatasi lebar card agar tidak terlalu besar */
          margin-left: auto;
          margin-right: auto;
        }

        .card:hover {
          transform: perspective(1500px) rotateX(0deg) rotateY(0deg);
          box-shadow: 16px 16px 30px rgba(0, 0, 0, 0.1), -16px -16px 30px rgba(255, 255, 255, 0.3);
        }

        .card h2 {
          margin: 0;
          font-family: 'Noto Sans JP', sans-serif;
          color: #333;
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .card p {
          font-family: 'Roboto', sans-serif;
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        /* Responsiveness untuk layar kecil */
        @media (max-width: 768px) {
          .card {
            padding: 1rem;
            max-width: 90%;  /* Card bisa mengambil lebih banyak ruang pada layar kecil */
          }

          .card h2 {
            font-size: 1.6rem; /* Mengurangi ukuran font agar lebih pas di layar kecil */
          }

          .card p {
            font-size: 1rem; /* Mengurangi ukuran font paragraf */
          }
        }

        /* Responsiveness untuk perangkat dengan layar lebih kecil (seperti ponsel) */
        @media (max-width: 480px) {
          .card {
            padding: 0.8rem;
            max-width: 95%; /* Mengurangi ruang sekitar card */
          }

          .card h2 {
            font-size: 1.4rem; /* Ukuran font lebih kecil */
          }

          .card p {
            font-size: 0.9rem; /* Ukuran font paragraf lebih kecil */
          }
        }
      `}
    </style>
  </div>
);

export default Card;
