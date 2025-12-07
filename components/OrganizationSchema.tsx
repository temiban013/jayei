'use client';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JAYEI',
    alternateName: 'Junte de Artistas y Escritores Internacionales',
    description:
      'Comunidad vibrante de poetas, escritores y artistas del Caribe, especializada en veladas poéticas y eventos literarios.',
    url: 'https://jayei.org',
    logo: 'https://jayei.org/jayei-logo.jpg',
    image: 'https://jayei.org/jayei-logo.jpg',
    sameAs: [
      'https://www.instagram.com/jayei_org',
      'https://www.facebook.com/jayei.org',
      'https://www.twitter.com/jayei_org'
    ],
    location: {
      '@type': 'Place',
      name: 'Caribe',
      address: {
        '@type': 'PostalAddress',
        addressCountry: ['PR', 'DO'],
        addressLocality: ['Humacao', 'República Dominicana']
      }
    },
    founder: {
      '@type': 'Organization',
      name: 'JAYEI Community'
    },
    knowsAbout: [
      'Poetry',
      'Veladas Poéticas',
      'Literature',
      'Arts',
      'Caribbean Culture',
      'Spanish Literature'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Community Engagement',
      availableLanguage: ['es', 'en']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
