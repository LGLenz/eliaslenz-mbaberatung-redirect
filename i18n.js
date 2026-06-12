/**
 * DigiAssist — i18n (German/English)
 * German is default. English toggle available.
 */

const translations = {
  de: {
    // Nav
    'nav.services': 'Leistungen',
    'nav.references': 'Referenzen',
    'nav.qualifications': 'Qualifikationen',
    'nav.contact': 'Kontakt',
    'nav.about': 'Über uns',

    // Hero
    'hero.badge': 'IT-Sicherheitsberatung',
    'hero.title.line1': 'IT-Sicherheitsberatung',
    'hero.title.line2': 'und KI-Governance',
    'hero.title.line3': 'für den Mittelstand',
    'hero.subtitle': 'Compliance mit NIS2, DORA, EU AI Act und Cyber Resilience Act — pragmatisch umgesetzt. Von der Risikoanalyse bis zur Implementierung.',
    'hero.cta': 'Jetzt Beratungsgespräch anfragen',
    'hero.cta2': 'Leistungen entdecken',

    // About
    'about.label': 'Über DigiAssist',
    'about.title': 'Ihr Partner für IT-Sicherheit',
    'about.p1': 'DigiAssist — Elias Lenz bietet freiberufliche IT-Sicherheitsberatung und KI-Governance für Unternehmen im deutschsprachigen Raum und der EU. Als Nebenerwerb gestartet, verbinde ich akademische Tiefe mit praktischer Erfahrung aus Projekten bei Energieversorgern und Netzbetreibern.',
    'about.p2': 'Mein Fokus liegt auf pragmatischen Lösungen: Compliance-Anforderungen wie NIS2, DORA und den EU AI Act in umsetzbare Maßnahmen übersetzen — ohne Overhead, ohne Buzzwords.',
    'about.p3': 'Erneute Existenzgründung 2026 — mit frischem Fokus auf KI-Governance und die neuen europäischen Regulierungsrahmen.',
    'about.stat1.value': '10+',
    'about.stat1.label': 'Jahre IT-Erfahrung',
    'about.stat2.value': 'MSc + MBA',
    'about.stat2.label': 'Doppelqualifikation',
    'about.stat3.value': 'PhD',
    'about.stat3.label': 'Cybersecurity (laufend)',
    'about.note': 'DigiAssist ist ein Nebenerwerb. Verpflichtungen gegenüber dem Arbeitgeber haben stets Vorrang.',

    // Services
    'services.label': 'Leistungen',
    'services.title': 'Sechs Säulen der IT-Sicherheit',
    'services.desc': 'Umfassende Beratung — von der Risikoanalyse über Compliance bis zur technischen Implementierung.',

    'service1.title': 'Cybersecurity Consulting',
    'service1.desc': 'Ganzheitliche Sicherheitsanalysen, Penetrationstests und Risikobewertungen. Identifikation von Schwachstellen und Entwicklung maßgeschneiderter Schutzstrategien.',
    'service1.tags': 'Audits|Pentests|Risikoanalyse',

    'service2.title': 'AI Governance & Compliance',
    'service2.desc': 'Umsetzung regulatorischer Anforderungen: NIS2-Richtlinie, DORA, EU AI Act und Cyber Resilience Act. Von der Gap-Analyse bis zur vollständigen Compliance.',
    'service2.tags': 'NIS2|DORA|EU AI Act|CRA',

    'service3.title': 'DevSecOps Advisory',
    'service3.desc': 'Integration von Sicherheit in CI/CD-Pipelines und Infrastructure-as-Code. Security Shift-Left für schnellere und sicherere Deployments.',
    'service3.tags': 'CI/CD|IaC|Shift-Left',

    'service4.title': 'Policy as Code',
    'service4.desc': 'Automatisierung von Compliance-Richtlinien mit OPA, Conftest und weiteren Tools. Audit-fähige Policies, die in Code überprüfbar sind.',
    'service4.tags': 'OPA|Conftest|Automation',

    'service5.title': 'Digitale Transformation',
    'service5.desc': 'Sichere Cloud-Migration und IT-Modernisierung. Begleitung von Legacy-Systemen in moderne, sichere Architekturen.',
    'service5.tags': 'Cloud|Migration|Modernisierung',

    'service6.title': 'vCISO',
    'service6.desc': 'Virtual Chief Information Security Officer als Dienstleistung. Strategische Sicherheitsberatung und Führung — ohne die Kosten einer Vollzeitstelle.',
    'service6.tags': 'Strategie|Führung|Flexibel',

    // References
    'refs.label': 'Referenzen',
    'refs.title': 'Ausgewählte Projekte',
    'refs.desc': 'Erfahrung aus Projekten in der Energiewirtschaft und kritischen Infrastruktur, mit Schwerpunkt auf EHS und Gefahrstoffmanagement.',

    'ref1.name': 'Gefahrstoffmanagement (Energiesektor)',
    'ref1.desc': 'Anwendungsbetreuung und kontinuierliche Weiterentwicklung einer Gefahrstoffmanagement-Software (EcoWebDesk) bei einem großen regionalen Energieversorger und Netzbetreiber. Verantwortlich für Stammdatenqualität, Anwenderbetreuung und Abstimmung mit EHS-Fachstellen zur Sicherstellung der regelkonformen Handhabung an mehreren Standorten.',
    'ref2.name': 'EHS-Softwarebetrieb (Kritische Infrastruktur)',
    'ref2.desc': 'Operativer Betrieb und Konfiguration von EHS- und Gefahrstoffmanagement-Software (Quentic / EcoWebDesk) bei einem Betreiber kritischer Infrastruktur. Pflege von Sicherheitsdaten, Onboarding interner Anwender, Koordination von Vendor-Updates sowie Dokumentation der Prozesse für Audit- und Compliance-Zwecke.',
    'ref3.name': 'Webprojekt KMU',
    'ref3.desc': 'Kompletter Webauftritt für ein kleines Unternehmen — Beispiel eines abgeschlossenen DigiAssist-Projekts.',

    // Qualifications
    'quals.label': 'Qualifikationen',
    'quals.title': 'Akademische & berufliche Qualifikationen',
    'quals.academic': 'Akademisch',
    'quals.certs': 'Zertifizierungen',
    'quals.recognition': 'Anerkennung',
    'qual.msc': 'MSc Information Security',
    'qual.mba': 'MBA International Management',
    'qual.phd': 'PhD Candidate, Cybersecurity — University of Plymouth',
    'qual.cc': 'ISC² Certified in Cybersecurity (CC)',
    'qual.sscp': 'ISC² Systems Security Certified Practitioner (SSCP)',
    'qual.ihk': 'IHK Gleichwertigkeitsbescheid',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Beratungsgespräch vereinbaren',
    'contact.desc': 'Beschreiben Sie Ihr Anliegen und ich melde mich zeitnah bei Ihnen.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen (optional)',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.notice': 'Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.',
    'contact.form.placeholder.name': 'Ihr Name',
    'contact.form.placeholder.email': 'ihre@email.de',
    'contact.form.placeholder.company': 'Ihr Unternehmen',
    'contact.form.placeholder.subject': 'Worum geht es?',
    'contact.form.placeholder.message': 'Beschreiben Sie Ihr Anliegen...',
    'contact.info.location.title': 'Standort',
    'contact.info.location.text': 'Filderstadt, Baden-Württemberg',
    'contact.info.scope.title': 'Einzugsgebiet',
    'contact.info.scope.text': 'EU / EWR / DACH — Remote & vor Ort',
    'contact.info.response.title': 'Antwortzeit',
    'contact.info.response.text': 'In der Regel innerhalb von 48 Stunden',

    // Footer
    'footer.copy': '© 2026 Elias Lenz — IT-Sicherheitsberatung und KI-Governance',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'footer.attribution': 'Created with Perplexity Computer',

    // Cookie
    'cookie.text': 'Diese Website verwendet nur technisch notwendige Cookies. Keine Tracking- oder Analyse-Cookies.',
    'cookie.btn': 'Verstanden',

    // Form success/error
    'form.success': 'Vielen Dank! Ihre Nachricht wurde vorbereitet. Bitte senden Sie die E-Mail über Ihr E-Mail-Programm.',
    'form.error.bot': 'Ihre Nachricht konnte nicht gesendet werden.',
    'form.error.fields': 'Bitte füllen Sie alle Pflichtfelder aus.',
  },

  en: {
    // Nav
    'nav.services': 'Services',
    'nav.references': 'References',
    'nav.qualifications': 'Qualifications',
    'nav.contact': 'Contact',
    'nav.about': 'About',

    // Hero
    'hero.badge': 'Cybersecurity Consulting',
    'hero.title.line1': 'IT Security Consulting',
    'hero.title.line2': 'and AI Governance',
    'hero.title.line3': 'for the Mittelstand',
    'hero.subtitle': 'Compliance with NIS2, DORA, EU AI Act and Cyber Resilience Act — pragmatically implemented. From risk analysis to implementation.',
    'hero.cta': 'Request a Consultation',
    'hero.cta2': 'Explore Services',

    // About
    'about.label': 'About DigiAssist',
    'about.title': 'Your Partner for IT Security',
    'about.p1': 'DigiAssist — Elias Lenz offers freelance IT security consulting and AI governance for companies in the DACH region and the EU. Started as a part-time side business, I combine academic depth with practical experience from projects at energy utilities and grid operators.',
    'about.p2': 'My focus is on pragmatic solutions: translating compliance requirements like NIS2, DORA, and the EU AI Act into actionable measures — without overhead, without buzzwords.',
    'about.p3': 'Re-established in 2026 — with a fresh focus on AI governance and the new European regulatory frameworks.',
    'about.stat1.value': '10+',
    'about.stat1.label': 'Years IT Experience',
    'about.stat2.value': 'MSc + MBA',
    'about.stat2.label': 'Dual Qualification',
    'about.stat3.value': 'PhD',
    'about.stat3.label': 'Cybersecurity (ongoing)',
    'about.note': 'DigiAssist is a part-time side business (Nebenerwerb). Employer commitments always take priority.',

    // Services
    'services.label': 'Services',
    'services.title': 'Six Pillars of IT Security',
    'services.desc': 'Comprehensive consulting — from risk analysis through compliance to technical implementation.',

    'service1.title': 'Cybersecurity Consulting',
    'service1.desc': 'Comprehensive security assessments, penetration tests, and risk evaluations. Identifying vulnerabilities and developing tailored protection strategies.',
    'service1.tags': 'Audits|Pentests|Risk Analysis',

    'service2.title': 'AI Governance & Compliance',
    'service2.desc': 'Implementation of regulatory requirements: NIS2 Directive, DORA, EU AI Act, and Cyber Resilience Act. From gap analysis to full compliance.',
    'service2.tags': 'NIS2|DORA|EU AI Act|CRA',

    'service3.title': 'DevSecOps Advisory',
    'service3.desc': 'Security integration into CI/CD pipelines and Infrastructure-as-Code. Security Shift-Left for faster and more secure deployments.',
    'service3.tags': 'CI/CD|IaC|Shift-Left',

    'service4.title': 'Policy as Code',
    'service4.desc': 'Automated compliance policies using OPA, Conftest, and related tools. Audit-ready policies verifiable in code.',
    'service4.tags': 'OPA|Conftest|Automation',

    'service5.title': 'Digital Transformation',
    'service5.desc': 'Secure cloud migration and IT modernisation. Guiding legacy systems into modern, secure architectures.',
    'service5.tags': 'Cloud|Migration|Modernisation',

    'service6.title': 'vCISO',
    'service6.desc': 'Virtual Chief Information Security Officer as a service. Strategic security advisory and leadership — without the cost of a full-time position.',
    'service6.tags': 'Strategy|Leadership|Flexible',

    // References
    'refs.label': 'References',
    'refs.title': 'Selected Projects',
    'refs.desc': 'Experience from projects in the energy and critical infrastructure sectors, with a focus on EHS and hazardous substances management.',

    'ref1.name': 'Hazardous Substances Management (Energy Sector)',
    'ref1.desc': 'Application management and continuous improvement of a hazardous substances management platform (EcoWebDesk) for a large regional energy and grid operator. Responsible for substance data quality, user support, and coordination with EHS specialists to ensure regulatory compliance across multiple operational sites.',
    'ref2.name': 'EHS Software Operations (Critical Infrastructure)',
    'ref2.desc': 'Operational support and configuration of EHS and hazardous substances management software (Quentic / EcoWebDesk) for a critical infrastructure provider. Activities included maintaining safety data, onboarding internal users, coordinating vendor updates, and documenting processes for audit and compliance.',
    'ref3.name': 'SME Web Project',
    'ref3.desc': 'Complete web presence development for a small business — example of a completed DigiAssist project.',

    // Qualifications
    'quals.label': 'Qualifications',
    'quals.title': 'Academic & Professional Qualifications',
    'quals.academic': 'Academic',
    'quals.certs': 'Certifications',
    'quals.recognition': 'Recognition',
    'qual.msc': 'MSc Information Security',
    'qual.mba': 'MBA International Management',
    'qual.phd': 'PhD Candidate, Cybersecurity — University of Plymouth',
    'qual.cc': 'ISC² Certified in Cybersecurity (CC)',
    'qual.sscp': 'ISC² Systems Security Certified Practitioner (SSCP)',
    'qual.ihk': 'IHK Equivalence Certificate (Gleichwertigkeitsbescheid)',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Schedule a Consultation',
    'contact.desc': 'Describe your needs and I will get back to you promptly.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company (optional)',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.notice': 'By submitting, you agree to the processing of your data in accordance with our privacy policy. Your data will be used exclusively to process your inquiry.',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.company': 'Your company',
    'contact.form.placeholder.subject': 'What is this about?',
    'contact.form.placeholder.message': 'Describe your needs...',
    'contact.info.location.title': 'Location',
    'contact.info.location.text': 'Filderstadt, Baden-Württemberg, Germany',
    'contact.info.scope.title': 'Service Area',
    'contact.info.scope.text': 'EU / EEA / DACH — Remote & On-site',
    'contact.info.response.title': 'Response Time',
    'contact.info.response.text': 'Usually within 48 hours',

    // Footer
    'footer.copy': '© 2026 Elias Lenz — IT Security Consulting and AI Governance',
    'footer.impressum': 'Legal Notice',
    'footer.datenschutz': 'Privacy Policy',
    'footer.attribution': 'Created with Perplexity Computer',

    // Cookie
    'cookie.text': 'This website uses only technically necessary cookies. No tracking or analytics cookies.',
    'cookie.btn': 'Understood',

    // Form success/error
    'form.success': 'Thank you! Your message has been prepared. Please send the email via your email client.',
    'form.error.bot': 'Your message could not be sent.',
    'form.error.fields': 'Please fill in all required fields.',
  }
};

let currentLang = 'de';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text) {
      el.textContent = text;
    }
  });

  // Update all translatable HTML elements (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const text = translations[lang][key];
    if (text) {
      el.innerHTML = text;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[lang][key];
    if (text) {
      el.placeholder = text;
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function t(key) {
  return translations[currentLang][key] || key;
}
