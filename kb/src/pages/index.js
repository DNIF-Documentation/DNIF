import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();


  

  const cardData = [
    // { title: "Getting Started", emoji: "🚀", animation: "zoom", link: encodeURI("/docs/DOCS_ONPREM/1.Getting Started/getting-started") },
    { title: "Connect, Extract, and Enrich", emoji: "🔌", animation: "pulse", link: "docs/documents/Connect,Extract-and-Enrich/Device-Integration/palo-alto-device-integration" },
    { title: "Hunting with Workbooks", emoji: "🕵️", animation: "wiggle", link: "docs/documents/Hunting-with-Workbooks/Getting-Started/your-first-find-with-the-hypercloud" },
    { title: "Dnif Query Language", emoji: "💻", animation: "glow", link: "docs/documents/DNIF-QUERY-LANGUAGE/Schema-on-Read" },
    { title: "Security Monitoring", emoji: "🛡️", animation: "bounce", link: "docs/documents/Security-Monitoring/streamline-alert-analysis-with-signal-tagging" },
    { title: "User Management and Access Control", emoji: "👥", animation: "float", link: "docs/documents/User-Management-and-Access-Control/Users-and-Roles/DNIF-Entities" },
    { title: "Solution Design", emoji: "🧩", animation: "wiggle", link: "docs/documents/Solution-Design/scaling-datanodes" },
    { title: "Operations", emoji: "⚙️", animation: "rotate", link: "docs/documents/Operations/Collection Status/collection-status" },
    { title: "Platform Services", emoji: "🔧", animation: "shake", link: "docs/documents/Platform-Services/automation" },
    { title: "Troubleshooting and Debugging", emoji: "🛠️", animation: "rock", link: "docs/documents/Troubleshooting-and-Debugging/troubleshooting-connector-validations" },
    { title: "DNIF AI", emoji: "🤖", animation: "pulse", link: "docs/documents/DNIF-AI/Getting-Started-with-DNIF-AI" },
    { title: "License Management and Billing", emoji: "💳", animation: "tilt", link: "docs/documents/License-Management-and-Billing/Term-Based-Software-Subscription" },
    { title: "DNIF Legal and Security Compliance", emoji: "📜", animation: "roll", link: "docs/documents/DNIF-Legal-and-Security-Compliance/Data Privacy Policy/data-privacy-policy" },
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
          <h1 className={styles.heroTitle}>How can we help?</h1>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search Docs, Tutorials, etc."
              className={styles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </header>

      {/* Cards Section */}
      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>Knowledge Base</h2>
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
