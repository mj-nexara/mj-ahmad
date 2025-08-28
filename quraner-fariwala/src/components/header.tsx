import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', backgroundColor: '#FFFFFF' }}>
    <h1>📖 Quraner Fariwala</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/quranlab">QuranLab</Link> | <Link to="/district">Districts</Link> | <Link to="/legal">Legal</Link> | <Link to="/transparency">Transparency</Link> | <Link to="/join">Join</Link> | <Link to="/contact">Contact</Link> | <Link to="/AdminPortal">Admin</Link> | <Link to="/Finance">Finance</Link>
    </nav> | <Link to="/Docs">Docs</Link> | <Link to="/Terms">Terms</Link> | <Link to="/Privacy">Privacy</Link> | <Link to="/qurangallery">gallery</Link> | <Link to="/quranvideogallery">videogallery</Link> | <Link to="/quranpagespreview">QuranPagesPreview</Link>


  </header>
);

export default Header;
