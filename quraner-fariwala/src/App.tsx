import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuranLab from './pages/QuranLab';
import DistrictNetwork from './pages/DistrictNetwork';
import LegalEthics from './pages/LegalEthics';
import Transparency from './pages/Transparency';
import JoinMission from './pages/JoinMission';
import Contact from './pages/Contact';
import AdminPortal from './pages/AdminPortal';
import Finance from './pages/Finance';
import Docs from './pages/Docs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import QuranGallery from './pages/qurangallery';
import QuranVideoGallery from './pages/quranvideogallery';
import QuranPagesPreview from './pages/quranpagespreview';



const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quranlab" element={<QuranLab />} />
      <Route path="/district" element={<DistrictNetwork />} />
      <Route path="/legal" element={<LegalEthics />} />
      <Route path="/transparency" element={<Transparency />} />
      <Route path="/join" element={<JoinMission />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/AdminPortal" element={<AdminPortal />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/qurangallery" element={<QuranGallery />} />
      <Route path="/quranvideogallery" element={<QuranVideoGallery />} />
      <Route path="/quranpagespreview" element={<QuranPagesPreview />} />
          </Routes>
    <Footer />
  </Router>
);

export default App;

