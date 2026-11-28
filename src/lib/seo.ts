import { localizedPath, SITE_ORIGIN, type Lang, type PagePath } from "@/lib/localization";

type Text = { en: string; ua: string };
type PageSeo = {
  title: Text;
  description: Text;
  article?: { headline: Text; published: string; modified: string };
};

export const PAGE_SEO: Record<PagePath, PageSeo> = {
  "/": {
    title: { en: "SABIR VAULT — Air-Gapped Corporate Forensics", ua: "SABIR VAULT — Автономний корпоративний форензік" },
    description: {
      en: "Turn document archives into verified evidence in 48 hours. SABIR VAULT combines 26 risk transistors, financial forensics and HR analysis, fully on-premise.",
      ua: "Перетворіть архів документів на перевірені докази за 48 годин. SABIR VAULT поєднує 26 транзисторів ризику, фінансовий форензік та HR-аудит без хмар.",
    },
  },
  "/insights": {
    title: { en: "Insights — Corporate Forensics Research | SABIR VAULT", ua: "Аналітика — Корпоративний форензік | SABIR VAULT" },
    description: {
      en: "Explore SABIR VAULT research on spreadsheet chaos, deterministic local AI and retail ERP risks. Practical perspectives on sovereign corporate forensics.",
      ua: "Дослідження SABIR VAULT про хаос у таблицях, детермінований локальний ШІ та ризики ERP у ритейлі. Практичний погляд на суверенний корпоративний аудит.",
    },
  },
  "/insights/frankenstein-syndrome": {
    title: { en: "The Frankenstein Syndrome: ERP Chaos | SABIR VAULT", ua: "Синдром Франкенштейна: хаос у таблицях | SABIR VAULT" },
    description: {
      en: "Why company growth creates spreadsheet chaos, margin leaks and operational silos. Recover control of your business without a $20,000 custom ERP system.",
      ua: "Чому ріст компанії створює хаос у таблицях, витік маржі та інформаційні острови. Як повернути контроль над операційкою без власної ERP за $20 000.",
    },
    article: {
      headline: {
        en: "The Frankenstein Syndrome: Why Company Growth Breaks Operations — and How to Fix Spreadsheet Chaos Without a $20,000 Custom ERP",
        ua: "Синдром Франкенштейна: чому ріст компанії вбиває операційку і як розібрати хаос у таблицях без ERP за $20 000",
      },
      published: "2026-10-01", modified: "2026-10-06",
    },
  },
  "/insights/taming-local-ai": {
    title: { en: "Taming Local AI in an Air-Gapped System | SABIR VAULT", ua: "Локальний ШІ у закритому контурі | SABIR VAULT" },
    description: {
      en: "Why corporate audits need more than an LLM. Constrain local AI on Apple Silicon with 26 deterministic risk transistors and a relational SQLite engine.",
      ua: "Чому корпоративному аудиту недостатньо мовної моделі. Локальний ШІ на Apple Silicon під контролем 26 детермінованих транзисторів ризику та ядра SQLite.",
    },
    article: {
      headline: {
        en: "How to Tame Local AI in an Air-Gapped Environment: Why LLMs Cannot Be Trusted Without a Deterministic Skeleton",
        ua: "Як приборкати штучний інтелект у закритому контурі: чому мовній моделі не можна вірити без жорсткого математичного каркасу",
      },
      published: "2026-10-01", modified: "2026-10-06",
    },
  },
  "/insights/claude-erp-retail-illusion": {
    title: { en: "The Claude Agent for ERP Illusion | SABIR VAULT", ua: "Claude для 1С: ризики ШІ у ритейлі | SABIR VAULT" },
    description: {
      en: "Cloud LLMs can break retail math and expose margins. Learn how a Deterministic Shield and air-gapped local AI find dead stock, discrepancies and trapped cash.",
      ua: "Хмарний Claude у 1С помиляється в математиці та розкриває маржу. Як Deterministic Shield і локальний ШІ знаходять неліквіди, розбіжності та заморожені гроші.",
    },
    article: {
      headline: {
        en: 'The "Claude Agent for ERP" Illusion: Why Connecting Cloud LLMs to 1C Breaks Retail Math — and How to Actually Recover Trapped Cash',
        ua: "«ШІ-агент на Claude для 1С»: чому це небезпечна ілюзія і як насправді витягнути гроші зі звітів ритейлу",
      },
      published: "2026-11-25", modified: "2026-11-25",
    },
  },
  "/insights/barcode-scanner-warehouse-illusion": {
    title: { en: "Why Barcode Scanners Won't Stop Warehouse Loss | SABIR VAULT", ua: "Чому ТЗД за 20 000 грн не зупинить недостачі | SABIR VAULT" },
    description: {
      en: "Buying a $500 handheld scanner won't fix inventory shrinkage. How to spot receiving gaps, fake scans, and shift patterns across 1C/ERP.",
      ua: "Купівля ТЗД не закриває дірки на складі. Як знаходити розриви між накладною, прийманням в 1С, фіктивним скануванням та інвентаризацією.",
    },
    article: {
      headline: { en: "Why a $500 Barcode Scanner Won't Fix Warehouse Shrinkage", ua: "Чому ТЗД за 20 000 грн не зупинить недостачі на складі" },
      published: "2026-11-27", modified: "2026-11-27",
    },
  },
  "/solutions/executive-copilot": {
    title: { en: "Executive Pre-Audit Copilot | SABIR VAULT", ua: "Виконавчий Pre-Audit Копілот | SABIR VAULT" },
    description: {
      en: "Run your company on facts, not reports. Cross-match contracts, payments and HR records into a verified executive threat map in 48 hours, with zero cloud leaks.",
      ua: "Керуйте компанією за фактами, а не звітами. Звірка договорів, оплат і кадрових документів у перевірену карту загроз за 48 годин без витоків у хмару.",
    },
  },
  "/cfo": {
    title: { en: "Corporate Finance & AML Integrity | SABIR VAULT", ua: "Корпоративні фінанси та AML-аудит | SABIR VAULT" },
    description: {
      en: "Detect margin leaks, AML structuring, circular transfers and hidden liabilities. Reconcile contracts, primary acts and bank statements entirely on-premise.",
      ua: "Виявляйте витік маржі, дроблення платежів, кругові каруселі та приховані борги. Звіряйте договори, первинні акти й банківські виписки повністю локально.",
    },
  },
  "/logistics": {
    title: { en: "Supply Chain & Waybill Integrity | SABIR VAULT", ua: "Аудит логістики та накладних ТТН/CMR | SABIR VAULT" },
    description: {
      en: "Detect phantom freight, ghost carriers, weight gaps and recycled TTN/CMR waybills. Cross-match contracts, invoices and payments in a private air-gapped system.",
      ua: "Виявляйте фіктивні рейси, фантомних перевізників, розриви ваги та дублікати ТТН/CMR. Звіряйте договори, накладні та оплати в автономному приватному контурі.",
    },
  },
  "/agro": {
    title: { en: "Agroholdings & Land Assets Integrity | SABIR VAULT", ua: "Аудит агрохолдингів та земельних активів | SABIR VAULT" },
    description: {
      en: "Uncover proxy suppliers, grain theft, ghost fuel write-offs and duplicate land leases. Reconcile agroholding documents with sovereign, on-premise forensics.",
      ua: "Розкривайте підставних постачальників, крадіжки зерна, фіктивне списання палива та дублікати паїв. Суверенний аудит документів агрохолдингу без хмар.",
    },
  },
  "/memory": {
    title: { en: "Corporate Memory & Insider Risk | SABIR VAULT", ua: "Пам'ять компанії та внутрішні ризики | SABIR VAULT" },
    description: {
      en: "Recover company knowledge from historical documents. Detect process bypass, hidden kickbacks and insider risk with 9 employee detectors, fully on-premise.",
      ua: "Відновлюйте знання компанії з історичних документів. Виявляйте обхід регламентів, приховані відкати й кадрові ризики через 9 детекторів повністю локально.",
    },
  },
  "/security-service": {
    title: { en: "Security Service & Internal Control | SABIR VAULT", ua: "Для СБ та внутрішнього контролю | SABIR VAULT" },
    description: {
      en: "Expose hidden related parties, shell chains, asset stripping and fictitious debts. Air-gapped forensics gives security officers document-linked evidence.",
      ua: "Виявляйте прихованих пов'язаних осіб, фіктивні компанії, виведення активів та вигадані борги. Автономний форензік надає офіцерам СБ докази з документів.",
    },
  },
  "/whitepaper": {
    title: { en: "Verification White Paper v2.7 | SABIR VAULT", ua: "Маніфест верифікації v2.7 | SABIR VAULT" },
    description: {
      en: "How SABIR VAULT verifies its deterministic forensic engine: five assurance layers, 376+ automated checks, formal proofs and air-gapped execution without AI guesses.",
      ua: "Як SABIR VAULT доводить коректність форензик-ядра: п'ять рівнів верифікації, понад 376 автоперевірок, формальні докази та автономна робота без здогадок ШІ.",
    },
  },
  "/privacy": {
    title: { en: "Privacy Policy | SABIR VAULT", ua: "Політика конфіденційності | SABIR VAULT" },
    description: {
      en: "How SABIR VAULT collects and protects personal data from enterprise inquiries and pilot requests. Review processing purposes, privacy safeguards and GDPR rights.",
      ua: "Як SABIR VAULT збирає та захищає персональні дані з корпоративних запитів і заявок на пілот. Мета обробки, гарантії конфіденційності та права за GDPR.",
    },
  },
};

const founderId = `${SITE_ORIGIN}/#founder`;
const organizationId = `${SITE_ORIGIN}/#organization`;
const websiteId = `${SITE_ORIGIN}/#website`;

function identityGraph(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person", "@id": founderId, name: "Sabir Dushayev",
        alternateName: ["Sabir Dushaev", "Sobir Dushayev", "Сабір Душаєв", "Собір Душаєв"],
        jobTitle: "Founder & Lead Architect",
        image: `${SITE_ORIGIN}/__l5e/assets-v1/e53dd441-561b-4aa1-a4a0-f92baf12b16a/sabir-dushayev-founder.jpg`,
        url: SITE_ORIGIN, sameAs: ["https://www.linkedin.com/in/sabirvault/"], worksFor: { "@id": organizationId },
      },
      {
        "@type": "Organization", "@id": organizationId, name: "SABIR VAULT", url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/favicon.ico`, email: "contact@sabirvault.com",
        description: PAGE_SEO["/"].description[lang], founder: { "@id": founderId },
        sameAs: ["https://github.com/SABIR-VAULT"],
      },
      {
        "@type": "WebSite", "@id": websiteId, url: SITE_ORIGIN, name: "SABIR VAULT",
        inLanguage: ["en", "uk"], publisher: { "@id": organizationId },
      },
    ],
  };
}

export function pageHead(path: PagePath, lang: Lang) {
  const data = PAGE_SEO[path];
  const title = data.title[lang];
  const description = data.description[lang];
  const url = `${SITE_ORIGIN}${localizedPath(path, lang)}`;
  const enUrl = `${SITE_ORIGIN}${path}`;
  const ukUrl = `${SITE_ORIGIN}${localizedPath(path, "ua")}`;
  const schemaLang = lang === "ua" ? "uk" : "en";
  const meta: Array<{ title: string } | { name: string; content: string } | { property: string; content: string }> = [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: data.article || path === "/whitepaper" ? "article" : "website" },
    { property: "og:url", content: url }, { property: "og:locale", content: lang === "ua" ? "uk_UA" : "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
  ];
  // Preserve the existing privacy-page search exclusion in both languages.
  if (path === "/privacy") meta.push({ name: "robots", content: "noindex, nofollow" });
  const scripts: Array<{ type: string; children: string }> = [];
  const addSchema = (schema: object) => scripts.push({ type: "application/ld+json", children: JSON.stringify(schema) });
  if (path === "/") addSchema(identityGraph(lang));
  if (data.article) {
    meta.push(
      { property: "article:published_time", content: data.article.published },
      { property: "article:modified_time", content: data.article.modified },
      { property: "article:author", content: "Sabir Dushayev" },
    );
    addSchema({
      "@context": "https://schema.org", "@type": "Article", headline: data.article.headline[lang],
      description, inLanguage: schemaLang, datePublished: data.article.published,
      dateModified: data.article.modified, mainEntityOfPage: url,
      author: { "@type": "Person", "@id": founderId, name: "Sabir Dushayev", jobTitle: "Lead Systems Architect" },
      publisher: { "@type": "Organization", "@id": organizationId, name: "SABIR VAULT" },
    });
  }
  if (path === "/solutions/executive-copilot") {
    addSchema({
      "@context": "https://schema.org", "@graph": [
        { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: schemaLang,
          isPartOf: { "@id": websiteId }, publisher: { "@id": organizationId }, breadcrumb: { "@id": `${url}#breadcrumb` } },
        { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "ua" ? "Головна" : "Home", item: `${SITE_ORIGIN}${localizedPath("/", lang)}` },
          { "@type": "ListItem", position: 2, name: lang === "ua" ? "Рішення" : "Solutions", item: `${SITE_ORIGIN}${localizedPath("/", lang)}#solutions` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ] },
      ],
    });
  }
  return {
    meta,
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: enUrl },
      { rel: "alternate", hrefLang: "uk", href: ukUrl },
      { rel: "alternate", hrefLang: "x-default", href: enUrl },
    ],
    scripts,
  };
}