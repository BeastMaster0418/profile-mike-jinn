import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Mijisoft from './pages/Mijisoft';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mijisoft" element={<Mijisoft />} />
      </Routes>
    </div>
  );
}

export default App;
