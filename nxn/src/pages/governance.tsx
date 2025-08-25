import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import { markdownContent } from '../content/governance.md.ts';
import '../styles/documents.css';

const GovernancePage: React.FC = () => {
  return (
    <div className="doc-container">
      <Header />
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <Footer />
    </div>
  );
};

export default GovernancePage;
