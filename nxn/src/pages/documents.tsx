// src/pages/documents.tsx

import React from 'react';
import '../styles/documents.css';

const DocumentsPage: React.FC = () => {
  return (
    <div className="doc-container">
      <header className="doc-header">
        <h1>Institutional Documentation</h1>
        <p className="doc-subtitle">A legacy of transparency, dignity, and public proof</p>
      </header>

      <section className="doc-section" id="core-modules">
        <h2>📦 Core Modules</h2>
        <ul>
          <li><strong>auth/</strong>: Contributor identity, access levels, onboarding rituals</li>
          <li><strong>ledger/</strong>: Transaction logging with semantic timestamps</li>
          <li><strong>docs/</strong>: README anchors, contributor guides, ethical declarations</li>
          <li><strong>archive/</strong>: Historical records, social media captures, legal artifacts</li>
          <li><strong>scripts/</strong>: PowerShell automation for audit logging and recovery</li>
        </ul>
      </section>

      <section className="doc-section" id="folder-structure">
        <h2>🗂️ Folder Structure</h2>
        <pre>{`
/project-root
├── core-modules/
│   ├── auth/
│   ├── ledger/
│   ├── docs/
│   ├── archive/
│   └── scripts/
├── contributors/
│   ├── onboarding/
│   ├── rituals/
│   └── legacy/
├── governance/
│   ├── ethics/
│   ├── legal/
│   └── transparency/
└── README.md
        `}</pre>
        <p>Each folder contains a README.md file explaining its purpose, history, and usage.</p>
      </section>

      <section className="doc-section" id="ethical-principles">
        <h2>🧭 Ethical Principles</h2>
        <ul>
          <li>Every contributor is honored, documented, and protected</li>
          <li>No transaction is hidden; every action is logged and retrievable</li>
          <li>Legacy is the default, not an afterthought</li>
          <li>Automation must serve justice, not convenience</li>
          <li>Documentation is resistance against erasure</li>
        </ul>
      </section>

      <section className="doc-section" id="contributor">
        <h2>👥 Contributor</h2>
        <p><strong>Onboarding Rituals:</strong></p>
        <ul>
          <li>Semantic folder with name, role, and contributions</li>
          <li>README includes onboarding date, scope, ethical commitments, audit trail</li>
        </ul>
        <p><strong>Legacy Protocol:</strong></p>
        <ul>
          <li>Departing contributors are archived and honored</li>
          <li>Each folder includes a <code>legacy.md</code> file documenting impact</li>
        </ul>
      </section>

      <footer className="doc-footer">
        <p>Maintained by MJ Ahmad • Last updated: August 2025</p>
      </footer>
    </div>
  );
};

export default DocumentsPage;
