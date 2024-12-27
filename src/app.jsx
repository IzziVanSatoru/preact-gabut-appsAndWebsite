import { Router } from 'preact-router';
import Layout from './layout/Layout'; // Mengimpor Layout untuk membungkus Header dan Footer
import Home from './page/Home';
import About from './page/About';
import  Hobbies from './page/hobbies'

function App() {
  return (
    <Layout> {/* Layout membungkus Header dan Footer */}
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Hobbies path="/hobbies" />
      </Router>
    </Layout>
  );
}

export default App;
