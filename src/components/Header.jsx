const Header = () => (
  <header>
    <div className="header-container">
      <h1>gabut cuy</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/hobbies">Hobbies</a>
      </nav>
    </div>
    <style scoped>
      {`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #4CAF50;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 1000;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          color: white;
        }

        h1 {
          font-size: 1.5rem;
          margin: 0;
        }

        nav {
          display: flex;
        }

        nav a {
          margin: 0 1rem;
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #e0e0e0;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.2rem;
          }
          nav a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }

          nav {
            margin-top: 0.5rem;
          }
        }
      `}
    </style>
  </header>
);

export default Header;
