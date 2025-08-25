import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import { markdownContent } from '../content/about.md.ts';
import '../styles/documents.css';

const AboutPage: React.FC = () => {
  return (
    <div className="doc-container">
      <Header />
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <Footer />
    </div>
  );
};

export default AboutPage;
