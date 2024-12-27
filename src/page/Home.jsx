import { useState, useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GSAP Animations
    gsap.from('.home-page h1', {
      duration: 2,
      opacity: 0,
      y: -100,
      ease: 'power4.out',
    });

    gsap.from('.home-page p', {
      duration: 1.5,
      opacity: 0,
      y: 50,
      delay: 1,
      ease: 'power4.out',
    });

    gsap.from('.features', {
      duration: 2,
      opacity: 0,
      x: -200,
      ease: 'power4.out',
      delay: 1.5,
    });

    gsap.from('.features li', {
      duration: 1,
      opacity: 0,
      x: -100,
      stagger: 0.2,
      ease: 'power4.out',
    });

    // Hover Effect for Features List Items
    gsap.to('.features li', {
      scale: 1.05,
      duration: 0.3,
      ease: 'power1.out',
      paused: true,
      repeat: -1,
      yoyo: true,
    });

    // Fetching Weather Data
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const apiKey = "e8f74e1986fd43e88e0152130242612";
    const city = "Bogor";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>
        Halaman ini dibuat karena saya sangat gabut dan merasa gak punya apa-apa untuk dilakukan. Sekalian ngisi waktu, jadi saya buat halaman ini.
      </p>
      
      <div className="features">
        <h2>Kenapa Saya Buat Halaman Ini?</h2>
        <ul>
          <li><strong>Gabut banget:</strong> Kadang-kadang kita butuh tempat untuk menyalurkan kreativitas, apalagi ketika sedang nggak ada ide. Jadi, daripada diem aja, ya udah, buat halaman ini.</li>
          <li><strong>Introvert vibes:</strong> Sebagai orang yang introvert, saya sering merasa lebih nyaman kalau bisa bekerja sendirian, dan halaman ini adalah salah satu cara untuk mewujudkannya.</li>
          <li><strong>Pengin coba coding:</strong> Selain gabut, saya juga pengen banget belajar dan mencoba coding lebih dalam, jadi halaman ini adalah salah satu eksperimen saya dalam membuat sesuatu.</li>
        </ul>
      </div>

      {/* Display Weather */}
      <div className="weather-info">
        {loading ? (
          <p>Loading weather data...</p>
        ) : (
          weather && (
            <div>
              <h3>Weather in {weather.location.name}, {weather.location.country}</h3>
              <p>Temperature: {weather.current.temp_c}°C</p>
              <p>Condition: {weather.current.condition.text}</p>
              <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
            </div>
          )
        )}
      </div>

      <style scoped>
        {`
          /* Overall Home Page Styling */
          .home-page {
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

          h1 {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 1rem;
            text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
            transform: rotateX(15deg);
            animation: bounce 2s ease-in-out infinite;
          }

          p {
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
            animation: slideIn 1s ease-in-out forwards;
          }

          .weather-info {
            margin-top: 2rem;
            color: #fffae3;
          }

          .weather-info img {
            margin-top: 10px;
            width: 50px;
            height: 50px;
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
            animation: fadeIn 1.5s ease-in-out forwards;
          }

          .features li strong {
            color: rgb(117, 114, 113);
          }

          /* Animations */
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          @keyframes slideIn {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Media Queries */
          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }

            p {
              font-size: 1rem;
              margin-bottom: 1.5rem;
            }

            .features {
              max-width: 90%;
            }

            .features h2 {
              font-size: 1.5rem;
            }

            .features li {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 0.9rem;
              margin-bottom: 1rem;
            }

            .features {
              padding: 1rem;
            }

            .features h2 {
              font-size: 1.2rem;
            }

            .features li {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
