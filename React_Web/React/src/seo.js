const SITE_URL = 'https://www.yagnik.store';

const defaultDescription =
  'Yagnik provides custom software development, website development and taxation services for businesses in Rajkot, Gujarat and across India.';

function upsertMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertJsonLd(data) {
  let tag = document.head.querySelector('script[data-yagnik-schema="true"]');
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.dataset.yagnikSchema = 'true';
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

export function setSEO({ title, description = defaultDescription, path = '/', type = 'website' }) {
  const canonicalUrl = `${SITE_URL}${path}`;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', 'index, follow');
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:site_name', 'Yagnik');
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertLink('canonical', canonicalUrl);
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Yagnik',
  url: SITE_URL,
  logo: `${SITE_URL}/logog.svg`,
  email: 'dhamechayagnik1@gmail.com',
  telephone: '+919638131881',
  areaServed: [
    { '@type': 'City', name: 'Rajkot' },
    { '@type': 'State', name: 'Gujarat' },
    { '@type': 'Country', name: 'India' }
  ],
};

export { upsertJsonLd };
