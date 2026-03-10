import { Link } from 'react-router-dom';
import markImg from '../../mark.png';
import './Header.css';

function LogoMark() {
  return (
    <img src={markImg} alt="Mijisoft Studio" className="logo-mark" />
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <LogoMark />
        </div>
        <p className="tagline">
          Step Into Mijisoft Studio — Your Gateway to Limitless Digital Possibilities
        </p>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/mijisoft">Mijisoft</Link>
        </nav>
      </div>
    </header>
  );
}
