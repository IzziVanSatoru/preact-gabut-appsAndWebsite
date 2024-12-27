import { useState, useEffect } from 'preact/hooks';
import gsap from 'gsap';

const Hobbies = () => {
  const [activeTab, setActiveTab] = useState(0); // Menangani tab aktif

  const hobbies = [
    'Reading',
    'Traveling',
    'Photography',
    'Gaming',
    'Cooking',
    'Painting',
    'Gardening',
    'Music',
  ];

  const icons = ['📚', '✈️', '📸', '🎮', '🍴', '🎨', '🌱', '🎵'];

  useEffect(() => {
    // Animasi GSAP untuk kartu fitur
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );

    // Animasi GSAP untuk tab
    gsap.fromTo(
      '.tabs button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
    );
  }, [activeTab]);

  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>

      <div className="tabs">
        {hobbies.map((hobby, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            <span>{icons[index]}</span>
            {hobby}
          </button>
        ))}
      </div>

      <div className="hobby-description">
        <h2>{hobbies[activeTab]}</h2>
        <p>{`Explore the world of ${hobbies[activeTab]} and enjoy all its wonders.`}</p>
      </div>

      <div className="cool-features">
        <h3>Exciting Features:</h3>
        <div className="feature-list">
          <div className="feature-card">
            <span className="icon">📸</span>
            <h4>Photo Gallery</h4>
            <p>Discover amazing photo collections for each hobby.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎮</span>
            <h4>Interactive Games</h4>
            <p>Play games related to your favorite hobbies.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎵</span>
            <h4>Music Playlist</h4>
            <p>Enjoy curated playlists to match your mood.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎨</span>
            <h4>Creative Zone</h4>
            <p>Share your art and get inspired.</p>
          </div>
          <div className="feature-card">
            <span className="icon">✈️</span>
            <h4>Travel Inspirations</h4>
            <p>Explore the best places to visit for hobby enthusiasts.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🍴</span>
            <h4>Recipe Sharing</h4>
            <p>Try new recipes and share your culinary creations.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🌱</span>
            <h4>Gardening Tips</h4>
            <p>Learn how to grow your own plants and garden.</p>
          </div>
          <div className="feature-card">
            <span className="icon">📚</span>
            <h4>Reading Suggestions</h4>
            <p>Get recommendations for the best books in your favorite genres.</p>
          </div>
        </div>
      </div>

      <style scoped>
        {`
          .hobbies-container {
            padding: 2rem;
            text-align: center;
            background: linear-gradient(135deg, #ff7e5f, #feb47b);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          }

          .tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .tabs button {
            padding: 1rem;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
          }

          .tabs button.active {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
          }

          .tabs button:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .tabs button span {
            font-size: 1.5rem;
          }

          .hobby-description {
            margin-top: 2rem;
          }

          .cool-features {
            margin-top: 3rem;
          }

          .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
            justify-items: center;
          }

          .feature-card {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 1.5rem;
            border-radius: 8px;
            width: 250px;
            text-align: center;
            color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }

          .feature-card .icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .feature-card h4 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .feature-card p {
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default Hobbies;
