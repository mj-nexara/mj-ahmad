import React from 'react';
import './HeaderFooter.css';



const Footer: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      color: '#f0f0f0',
      textAlign: 'center',
      padding: '1rem',
      fontSize: '0.875rem',
      marginTop: 'auto'
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        Maintained by MJ Ahmad • Last updated: August 2025
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="/privacy" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="/terms" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Terms & Conditions</a>
        <a href="/docs" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Docs</a>
        <a href="/governance" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Governance</a>
      </div>
    </div>
  );
};

export default Footer;
