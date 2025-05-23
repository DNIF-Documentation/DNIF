window.filterNavbarArticles = function(searchTerm) {
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  searchTerm = searchTerm.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('.cardTitle')?.innerText.toLowerCase() || '';
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });

  // Scroll to cards section if search is active
  if (searchTerm.trim()) {
    const cardsSection = document.querySelector('.cardsSection');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
// static/js/live-navbar-search.js

// This should match your card data titles or fetch real ones
window.filterNavbarArticles = function (event) {
  const query = event.target.value.toLowerCase();

  const articles = [
    { title: "Connect, Extract, and Enrich", link: "/docs/documents/Connect,Extract-and-Enrich/Device-Integration/palo-alto-device-integration" },
    { title: "Hunting with Workbooks", link: "/docs/documents/Hunting-with-Workbooks/Getting-Started/your-first-find-with-the-hypercloud" },
    { title: "Dnif Query Language", link: "/docs/documents/Dnif-Query-Language/Schema-on-Read/" },
    { title: "Security Monitoring", link: "/docs/documents/Security-Monitoring/streamline-alert-analysis-with-signal-tagging" },
    { title: "User Management and Access Control", link: "/docs/documents/User-Management-and-Access-Control/Users-and-Roles/DNIF-Entities/" },
    { title: "Solution Design", link: "/docs/documents/Solution-Design/scaling-datanodes" },
    { title: "Operations", link: "/docs/documents/Operations/Collection Status/collection-status" },
    { title: "Platform Services", link: "/docs/documents/Platform-Services/automation" },
    { title: "Troubleshooting and Debugging", link: "/docs/documents/Troubleshooting-and-Debugging/troubleshooting-connector-validations" },
    { title: "DNIF AI", link: "/docs/documents/DNIF-AI/Getting-Started-with-DNIF-AI/" },
    { title: "License Management and Billing", link: "/docs/documents/License-Management-and-Billing/License-Management-and-Billing/Term-Based-Software-Subscription/" },
    { title: "DNIF Legal and Security Compliance", link: "/docs/documents/DNIF-Legal-and-Security-Compliance/Data Privacy Policy/data-privacy-policy" },
    { title: "Policies", link: "/docs/documents/Policies/the-dnif-hyperscale-lifecycle-and-release-cadence" },
    { title: "Best Practices", link: "/docs/documents/Best-Practices/advanced-telemetry-for-windows" },
    { title: "Release Notes", link: "/docs/documents/Release-Notes/april-17-2025-content-update" },
  ];

  const resultBox = document.getElementById('navbarSearchResults');
  if (!resultBox) return;

  resultBox.innerHTML = '';

  if (query.length === 0) {
    return;
  }

  const matched = articles.filter(article =>
    article.title.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    resultBox.innerHTML = '<div>No articles found</div>';
    return;
  }

  matched.forEach(article => {
    const item = document.createElement('div');
    item.innerHTML = `<a href="${article.link}" style="text-decoration: none; color: #333;">${article.title}</a>`;
    resultBox.appendChild(item);
  });
};

