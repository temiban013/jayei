"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to manage "Conoce Más" modal
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when a nav link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle smooth scrolling and menu closing
  const handleNavClick = (elementId: string) => {
    closeMobileMenu();
    setTimeout(() => {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Function to handle contact button click
  const handleContactClick = () => {
    const email = "junteartistasyescritoresint@gmail.com";
    const subject = encodeURIComponent("Interés en unirse a JAYEI");
    const body = encodeURIComponent(
      "Hola,\n\nEstoy interesado/a en conocer más sobre JAYEI y posiblemente unirme a su comunidad de artistas y escritores.\n\nEspero su respuesta.\n\nSaludos cordiales"
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // Function to handle "Conoce Más" button click
  const handleInfoClick = () => {
    setIsInfoModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  // Function to close info modal
  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Image
                src="/jayei-logo.jpg"
                alt="JAYEI Logo"
                width={120}
                height={120}
                className="rounded-xl"
                priority
              />
            </div>

            {/* Desktop Navigation */}
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
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-cream-500 p-2 rounded-md transition-colors"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    // X icon when menu is open
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    // Hamburger icon when menu is closed
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => handleNavClick("nosotros")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cream-900 hover:bg-amber-50 rounded-md font-medium transition-colors"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => handleNavClick("eventos")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cream-900 hover:bg-amber-50 rounded-md font-medium transition-colors"
                >
                  Eventos
                </button>
                <button
                  onClick={() => handleNavClick("galeria")}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cream-900 hover:bg-amber-50 rounded-md font-medium transition-colors"
                >
                  Galería
                </button>
                <button
                  onClick={() => handleNavClick("unete")}
                  className="block w-full text-left px-3 py-2 bg-cream-500 text-white hover:bg-amber-900 rounded-lg font-medium transition-colors mt-2"
                >
                  Únete
                </button>
              </div>
            </div>
          )}
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
              <button
                className="mt-6 bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg"
                onClick={() => handleNavClick("eventos")}
              >
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

          {/* Featured Event - Velada Poética en Desigual */}
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-5xl mx-auto mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cream-700 mb-2">
                  1ra Velada Poética en Desigual
                </h3>
                <p className="text-lg text-gray-600 italic">
                  Disfrutemos la poesía con momentos Desiguales
                </p>
              </div>
              <span className="bg-amber-100 text-cream-700 px-4 py-2 rounded-full font-semibold">
                Evento Especial
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-gray-700 font-medium">
                    Martes 12 de Agosto, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500 flex-shrink-0"
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
                <div>
                  <p className="text-gray-700 font-medium">7:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500 flex-shrink-0"
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
                <div>
                  <p className="text-gray-700 font-medium">
                    Desigual Gastro-bar
                  </p>
                  <p className="text-gray-500 text-sm">
                    118 Calle Cruz Ortiz Stella
                  </p>
                  <p className="text-gray-500 text-sm">Humacao, PR 00791</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-gray-700 font-medium">(787) 719-5399</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-cream-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div>
                  <p className="text-gray-700 font-medium">Anfitriones:</p>
                  <p className="text-gray-600 text-sm">
                    Eneida Rodríguez-Delgado
                  </p>
                  <p className="text-gray-600 text-sm">
                    Miguel A. Beltrán Álvarez
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <p className="text-cream-700 font-medium text-center">
                En Desigual gastro-bar se promueve la igualdad
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg">
                Confirmar Asistencia
              </button>
              <a
                href="tel:7877195399"
                className="border-2 border-cream-500 text-cream-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors text-center"
              >
                Llamar (787) 719-5399
              </a>
            </div>
          </div>

          {/* Regular Monthly Events */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-cream-700 mb-3">
                Encuentros Regulares
              </h3>
              <p className="text-gray-600">
                Normalmente nos reunimos el segundo martes de cada mes en Casa
                de la Cultura. ¡Mantente atento a nuestros próximos anuncios!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Now using the component */}
      <PhotoGallery totalImages={21} />

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
            <button
              onClick={handleContactClick}
              className="bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg"
            >
              Contáctanos
            </button>
            <button
              onClick={handleInfoClick}
              className="border-2 border-cream-500 text-cream-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeInfoModal}
        >
          <div
            className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                Conoce Más Sobre JAYEI
              </h3>
              <button
                onClick={closeInfoModal}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Historia */}
              <div>
                <h4 className="text-xl font-semibold text-cream-700 mb-3">
                  Nuestra Historia
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  JAYEI nació de la pasión compartida por el arte y la
                  literatura en el Caribe. Fundado por un grupo de escritores y
                  artistas comprometidos con la preservación y promoción de la
                  cultura literaria en Puerto Rico y República Dominicana, hemos
                  crecido hasta convertirnos en una comunidad vibrante que
                  trasciende fronteras.
                </p>
              </div>

              {/* Valores */}
              <div>
                <h4 className="text-xl font-semibold text-cream-700 mb-3">
                  Nuestros Valores
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Inclusión
                    </h5>
                    <p className="text-sm text-gray-600">
                      Acogemos a artistas de todas las edades y niveles de
                      experiencia
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Creatividad
                    </h5>
                    <p className="text-sm text-gray-600">
                      Fomentamos la expresión artística libre y auténtica
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Comunidad
                    </h5>
                    <p className="text-sm text-gray-600">
                      Creamos vínculos duraderos entre artistas y escritores
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Cultura
                    </h5>
                    <p className="text-sm text-gray-600">
                      Preservamos y promovemos la riqueza cultural del Caribe
                    </p>
                  </div>
                </div>
              </div>

              {/* Actividades */}
              <div>
                <h4 className="text-xl font-semibold text-cream-700 mb-3">
                  Nuestras Actividades
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cream-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-gray-800">
                        Veladas Poéticas Mensuales
                      </h5>
                      <p className="text-sm text-gray-600">
                        Encuentros íntimos donde compartimos nuestras creaciones
                        literarias
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cream-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-gray-800">
                        Talleres de Escritura
                      </h5>
                      <p className="text-sm text-gray-600">
                        Sesiones educativas para mejorar técnicas literarias y
                        artísticas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cream-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-gray-800">
                        Intercambios Culturales
                      </h5>
                      <p className="text-sm text-gray-600">
                        Colaboraciones entre artistas de Puerto Rico y República
                        Dominicana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cream-500 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-gray-800">
                        Publicaciones Digitales
                      </h5>
                      <p className="text-sm text-gray-600">
                        Plataforma para que cada miembro publique y comercialice
                        sus obras
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cómo unirse */}
              <div>
                <h4 className="text-xl font-semibold text-cream-700 mb-3">
                  ¿Cómo Unirse?
                </h4>
                <div className="bg-cream-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">
                    Unirse a JAYEI es simple y gratuito. Solo necesitas:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-cream-500 rounded-full"></span>
                      <span>Pasión por la literatura, poesía o arte</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-cream-500 rounded-full"></span>
                      <span>
                        Deseo de compartir y aprender con otros artistas
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-cream-500 rounded-full"></span>
                      <span>Compromiso con el respeto y la inclusión</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-cream-200">
                    <p className="text-sm text-gray-600 mb-3">
                      Para más información, contáctanos directamente:
                    </p>
                    <button
                      onClick={() => {
                        closeInfoModal();
                        handleContactClick();
                      }}
                      className="bg-cream-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors"
                    >
                      Escribir Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 pb-6">
              {/* Logo */}
              <Image
                src="/jayei-logo.jpg"
                alt="JAYEI Logo"
                width={250}
                height={250}
                className="rounded-xl"
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
