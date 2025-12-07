'use client';

export interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string | Date;
  endDate?: string | Date;
  location?: string;
  image?: string;
  url?: string;
}

export default function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location = 'Desigual gastro-bar, Humacao, Puerto Rico',
  image = 'https://jayei.org/event-default.jpg',
  url = 'https://jayei.org'
}: EventSchemaProps) {
  const formatDate = (date: string | Date): string => {
    if (typeof date === 'string') {
      return new Date(date).toISOString();
    }
    return date.toISOString();
  };

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    description: description,
    startDate: formatDate(startDate),
    ...(endDate && { endDate: formatDate(endDate) }),
    image: image,
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PR',
        addressLocality: 'Humacao',
        addressRegion: 'PR'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'JAYEI',
      alternateName: 'Junte de Artistas y Escritores Internacionales',
      url: 'https://jayei.org',
      logo: 'https://jayei.org/jayei-logo.jpg'
    },
    offers: {
      '@type': 'Offer',
      url: url,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder'
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    category: 'Literary Event'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}
