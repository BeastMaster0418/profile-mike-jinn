import { NavLink, useLocation } from 'react-router-dom';
import markImg from '../../mark.png';
import './Header.css';

function LogoMark() {
  return (
    <img src={markImg} alt="Mijisoft Studio" className="logo-mark" />
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <LogoMark />
        </div>
        <p className="tagline">

          {isHome ? (<>
            Welcome to Mijisoft Studio • Exploring the Unknown, Creating the Future with
            <a href="/mijisoft">mijisoft</a>
          </>) : (<>
            Step Into Mijisoft Studio — Your Gateway to Limitless Digital Possibilities
          </>)}
        </p>

        {isHome ? (
          <></>
        ) : (
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mijisoft#about">About</NavLink>
            <NavLink to="/mijisoft#work">Work</NavLink>
            <NavLink to="/mijisoft#projects">Projects</NavLink>
            <NavLink to="/mijisoft#skills">Skills</NavLink>
            <NavLink to="/mijisoft#contact">Contact</NavLink>
          </nav>
        )}

      </div>
    </header>
  );
}
