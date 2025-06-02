import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import '@docsearch/react/style'; // Algolia styling
import { DocSearchModal } from '@docsearch/react';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState(false);


  

  const cardData = [
    { title: "Welcome to DNIF", Svg: ('static/img/logo.svg'), link:"docs/documents/Welcome-to-DNIF" },
    { title: "Connect, Extract, and Enrich", emoji: "🔌", animation: "pulse", link: "docs/documents/connect-extract-enrich/Device-Integration/palo-alto-device-integration" },
    { title: "Hunting with Workbooks", emoji: "🕵️", animation: "wiggle", link: "docs/documents/Hunting-with-Workbooks/GETTING-STARTED/your-first-find-with-the-hypercloud" },
    { title: "DNIF Query Language", emoji: "💻", animation: "glow", link: "docs/documents/DNIF-Query-Language/Schema-on-Read" },
    { title: "Security Monitoring", emoji: "🛡️", animation: "bounce", link: "docs/documents/Security-Monitoring/streamline-alert-analysis-with-signal-tagging" },
    { title: "User Management and Access Control", emoji: "👥", animation: "float", link: "docs/documents/User-Management-and-Access-Control/Users-and-Roles/DNIF-Entities/" },    
    { title: "Solution Design", emoji: "🧩", animation: "zoom", link: "docs/documents/Solution-Design/scaling-datanodes" },
     { title: "Operations", emoji: "⚙️", animation: "rotate", link: "docs/documents/Operations/Collection Status/collection-status" },
    { title: "Platform Services", emoji: "🔧", animation: "shake", link: "docs/documents/Platform-Services/automation" },
    { title: "Troubleshooting and Debugging", emoji: "🛠️", animation: "rock", link: "docs/documents/Troubleshooting-and-Debugging/troubleshooting-connector-validations" },
    { title: "DNIF AI", emoji: "🤖", animation: "pulse", link: "docs/documents/DNIF-AI/Getting-Started-with-DNIF-AI/" },
    { title: "License Management and Billing", emoji: "💳", animation: "tilt", link: "docs/documents/License-Management-and-Billing/Term-Based-Software-Subscription" },
    { title: "DNIF Legal and Security Compliance", emoji: "📜", animation: "roll", link: "docs/documents/DNIF-Legal-and-Security-Compliance/Data-Privacy-Policy" },
    { title: "Policies", emoji: "📘", animation: "flip", link: "docs/documents/Policies/the-dnif-hyperscale-lifecycle-and-release-cadence" },
    { title: "Best Practices", emoji: "🌟", animation: "twinkle", link: "docs/documents/Best-Practices/advanced-telemetry-for-windows" },
    { title: "Release Notes", emoji: "📝", animation: "bounce", link: "docs/documents/Release-Notes/april-17-2025-content-update" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

const filteredCards = cardData.filter(card =>
  card.title.toLowerCase().includes(searchTerm.toLowerCase())
);


 return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Search documentation, tutorials, and more!"
    >
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hello. How can we help you?</h1>

          {/* Custom Search Bar triggering Algolia Modal */}
          <div className={styles.searchBar}>
  <input
    type="text"
    placeholder="Search..."
    className={styles.searchInput}
    onFocus={() => setIsOpen(true)}
    readOnly
  />
  <button
    type="button"
    className={styles.searchButton}
    onClick={() => setIsOpen(true)}
  >
    Search
  </button>
</div>


          {/* Algolia Modal */}
          {isOpen && (
            <DocSearchModal
              appId="YY0TIP6BF9"
              indexName="dnif-umentationio"
              apiKey="201e3bd2346e3a0caf9868f6f16d3bbb"
              onClose={() => setIsOpen(false)}
            />
          )}
        </div>
      </header>

      {/* Cards Section */}
      <section className={styles.cardsSection}>
        {/* <h2 className={styles.sectionTitle}></h2> */}
        <div className={styles.cardsGrid}>
          {filteredCards.map((card, i) => (
            <a href={card.link} className={styles.card} key={i}>
              <div className={`${styles.cardIcon} ${styles.animatedEmoji}`}>
                {card.emoji}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
