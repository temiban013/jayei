import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Image
                src="/jayeilogo.jpg"
                alt="JAYEI Logo"
                width={120}
                height={120}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#nosotros"
                className="text-gray-700 hover:text-cream-900 font-medium transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#eventos"
                className="text-gray-700 hover:text-cream-900 font-medium transition-colors"
              >
                Eventos
              </a>
              <a
                href="#galeria"
                className="text-gray-700 hover:text-cream-900 font-medium transition-colors"
              >
                Galería
              </a>
              <a
                href="#unete"
                className="bg-cream-500 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition-colors"
              >
                Únete
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-cream-500">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Junte de Artistas y<br />
              <span className="text-cream-500">Escritores Internacionales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Donde el Arte y la Literatura Se Encuentran
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Un espacio de encuentro para poetas, escritores y artistas que
                comparten su pasión por la palabra y la expresión creativa
              </p>
              <button className="mt-6 bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg">
                Conoce Nuestros Eventos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestra Misión
            </h2>
            <div className="w-24 h-1 bg-cream-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Documentar y Compartir */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-amber-50 to-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cream-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Documentar y Compartir
              </h3>
              <p className="text-gray-600">
                Transmitimos nuestros encuentros a través de fotografías, videos
                y contenido que captura la esencia de cada reunión artística
              </p>
            </div>

            {/* Inspirar a Nuevas Generaciones */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-amber-50 to-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cream-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Inspirar a Nuevas Generaciones
              </h3>
              <p className="text-gray-600">
                Atraemos a artistas jóvenes para que se unan a nuestra comunidad
                y desarrollen su talento junto a escritores experimentados
              </p>
            </div>

            {/* Crear Espacios Digitales */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-amber-50 to-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cream-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Crear Espacios Digitales
              </h3>
              <p className="text-gray-600">
                Desarrollamos plataformas para que cada artista tenga su blog
                personal y pueda comercializar sus obras directamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section
        id="eventos"
        className="py-24 bg-gradient-to-r from-cream-500 to-cream-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Próximos Encuentros
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h3 className="text-2xl font-bold text-cream-700">
                Velada Poética Mensual
              </h3>
              <span className="bg-amber-100 text-cream-700 px-4 py-2 rounded-full font-semibold">
                Primer viernes de cada mes
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Cada primer viernes del mes nos reunimos para compartir nuestras
              creaciones en un ambiente íntimo y acogedor
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">7:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700">Casa de la Cultura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="unete" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Forma Parte de Nuestra Comunidad
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Si eres poeta, escritor, o simplemente amas el arte de la palabra,
            te invitamos a unirte a JAYEI. No importa tu edad o experiencia,
            aquí encontrarás un espacio para crecer y compartir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg">
              Contáctanos
            </button>
            <button className="border-2 border-cream-500 text-cream-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors">
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 pb-6">
              {/* Logo */}
              <Image
                src="/jayeilogo.jpg"
                alt="JAYEI Logo"
                width={250}
                height={250}
                className="rounded-lg"
                priority
              />
            </div>
            <p className="text-gray-400 mb-4">
              Junta de Artistas y Escritores Internacionales
            </p>
            <p className="text-gray-400 text-sm">
              Unidos por el arte y la palabra
            </p>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 JAYEI - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
