import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import Form from './components/Form.js';
import Movies from './components/Movies.js';
import Navbar from './components/Navbar.js';
import MoviesByGenre from './components/MoviesByGenre.js';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Form />
    <Movies />
    <MoviesByGenre />
    <Footer />
    </>
  );
}

export default App;