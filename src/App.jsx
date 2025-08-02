import './App.css';
import Home from './components/user/Home';
import Navbar from './components/user/Navbar';
import Footer from './components/user/Footer';
import { BrowserRouter as Router,Routes,Route   } from 'react-router-dom';
import Contactus from './components/user/contactus';
import Whyus from './components/user/Whyus';

function App() {
  return (
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/whyus" element={<Whyus />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
