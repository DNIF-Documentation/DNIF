import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import '@docsearch/react/style'; // Algolia styling
import { DocSearchModal } from '@docsearch/react';

// Import the SVG as a React component
import WelcomeSvg from '@site/static/img/card-01-welcome.svg';
import CEE from '@site/static/img/card-02-cee.svg';
import Huntingwithworkbbok from '@site/static/img/card-03-hunting-w-wb.svg';
import DQL from '@site/static/img/card-04-dql.svg';
import SecurityMonitoring from '@site/static/img/card-05-security-monitoring.svg';
import Usermanagement from '@site/static/img/card-06-usr-mgmt.svg';
import SolutionDesign from '@site/static/img/card-07-solution-design.svg';
import Operation from '@site/static/img/card-08-ops.svg';
import Platform from '@site/static/img/card-09-platform.svg';
import Troubleshooting from '@site/static/img/card-10-troubleshooting.svg';
import DNIFAI from '@site/static/img/card-11-ai.svg';
import LicenseManagement from '@site/static/img/card-12-license-mgmt.svg';
import DNIFlegal from '@site/static/img/card-13-legal-compliance.svg';
import Policies from '@site/static/img/card-14-policies.svg';
import Bestpractices from '@site/static/img/card-15-best-practices.svg';
import Releasenote from '@site/static/img/card-16-release-notes.svg';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState(false);

  const cardData = [
    { title: "Welcome to DNIF", Svg: WelcomeSvg, link: "docs/documents/Welcome-to-DNIF" },
    { title: "Connect, Extract, and Enrich", Svg: CEE, animation: "pulse", link: "docs/documents/connect-extract-enrich/Intro_Connectors_extract_enrich" },
    { title: "Hunting with Workbooks", Svg: Huntingwithworkbbok, link: "docs/documents/Hunting-with-Workbooks/GETTING-STARTED/your-first-find-with-the-hypercloud" },
    { title: "DNIF Query Language", Svg: DQL, link: "docs/documents/DNIF-Query-Language/DQL_Intro" },
    { title: "Security Monitoring", Svg: SecurityMonitoring, link: "docs/documents/Security-Monitoring" },
    { title: "User Management and Access Control", Svg: Usermanagement, link: "docs/documents/User-Management-and-Access-Control/User-Management-in-DNIF" },
    { title: "Solution Design", Svg: SolutionDesign, link: "docs/documents/Solution-Design/" },
    { title: "Operations", Svg: Operation, link: "docs/documents/Operations/Collection-Status/"},
    { title: "Platform Services", Svg: Platform, link: "docs/documents/Platform-Services/automation" },
    { title: "Troubleshooting and Debugging",Svg: Troubleshooting, link: "docs/documents/Troubleshooting-and-Debugging/" },
    { title: "DNIF AI", Svg: DNIFAI, link: "docs/documents/DNIF-AI/Getting-Started-with-DNIF-AI/" },
    { title: "License Management and Billing", Svg: LicenseManagement, link: "docs/documents/License-Management-and-Billing/Term-Based-Software-Subscription" },
    { title: "DNIF Legal and Security Compliance", Svg: DNIFlegal, link: "docs/documents/DNIF-Legal-and-Security-Compliance/Data-Privacy-Policy" },
    { title: "Policies", Svg: Policies, link: "docs/documents/Policies/the-dnif-hyperscale-lifecycle-and-release-cadence" },
    { title: "Best Practices", Svg:Bestpractices, link: "docs/documents/Best-Practices/advanced-telemetry-for-windows" },
    { title: "Release Notes", Svg: Releasenote, link: "docs/documents/Release-Notes/June-13-2025-Content-Update" },
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
        <div className={styles.cardsGrid}>
          {filteredCards.map((card, i) => (
            <a href={card.link} className={styles.card} key={i}>
              <div className={`${styles.cardIcon} ${styles.animatedEmoji}`}>
                {card.Svg ? <card.Svg className={styles.svgIcon} /> : card.emoji}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}