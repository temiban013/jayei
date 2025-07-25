"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface PhotoGalleryProps {
  totalImages?: number;
}

export default function PhotoGallery({ totalImages = 21 }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Nuevo estado para manejar cuántas imágenes mostrar
  const [visibleImages, setVisibleImages] = useState(4); // Empezamos con 4 imágenes (1 fila en desktop)
  const [imagesPerRow, setImagesPerRow] = useState(4); // Imágenes por fila según el tamaño de pantalla

  // Generate array of image numbers for easier handling
  const imageNumbers = Array.from(
    { length: totalImages },
    (_, index) => index + 1
  );

  // Solo mostramos las imágenes hasta el límite actual
  const visibleImageNumbers = imageNumbers.slice(0, visibleImages);

  // Detectar el tamaño de pantalla para calcular imágenes por fila
  useEffect(() => {
    const updateImagesPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Móvil: 1 imagen por fila
        setImagesPerRow(1);
        if (visibleImages === 4) setVisibleImages(1); // Ajustar inicial para móvil
      } else if (width < 768) {
        // Tablet pequeña: 2 imágenes por fila
        setImagesPerRow(2);
        if (visibleImages === 1) setVisibleImages(2); // Ajustar desde móvil
      } else if (width < 1024) {
        // Tablet: 3 imágenes por fila
        setImagesPerRow(3);
        if (visibleImages < 3) setVisibleImages(3);
      } else {
        // Desktop: 4 imágenes por fila
        setImagesPerRow(4);
        if (visibleImages < 4) setVisibleImages(4);
      }
    };

    // Ejecutar al montar el componente
    updateImagesPerRow();

    // Escuchar cambios de tamaño de ventana
    window.addEventListener("resize", updateImagesPerRow);

    // Limpiar el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateImagesPerRow);
  }, [visibleImages]);

  // Función para mostrar más imágenes
  const showMoreImages = () => {
    const newVisibleCount = Math.min(
      visibleImages + imagesPerRow, // Agregar una fila completa
      totalImages // Pero no exceder el total de imágenes
    );
    setVisibleImages(newVisibleCount);
  };

  // Verificar si hay más imágenes para mostrar
  const hasMoreImages = visibleImages < totalImages;

  const openModal = (imageNumber: number) => {
    setSelectedImage(imageNumber);
    setShowModal(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;

    if (direction === "next") {
      setSelectedImage(selectedImage === totalImages ? 1 : selectedImage + 1);
    } else {
      setSelectedImage(selectedImage === 1 ? totalImages : selectedImage - 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "ArrowLeft") navigateImage("prev");
  };

  return (
    <section
      id="galeria"
      className="py-24 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galería de Momentos
          </h2>
          <div className="w-24 h-1 bg-cream-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturamos los momentos más especiales de nuestros encuentros, donde
            la poesía cobra vida y las amistades se fortalecen
          </p>
        </div>

        {/* Gallery Grid - Ahora solo muestra las imágenes visibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImageNumbers.map((imageNumber) => {
            const imageSrc = `/jayei${imageNumber}.jpg`;

            return (
              <div
                key={imageNumber}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
                onClick={() => openModal(imageNumber)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={imageSrc}
                    alt={`Momento JAYEI ${imageNumber}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Caption */}
                <div className="p-3">
                  <p className="text-sm text-gray-600 text-center">
                    Encuentro Artístico #{imageNumber}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón "Ver más" - Solo se muestra si hay más imágenes */}
        {hasMoreImages && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreImages}
              className="bg-cream-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors shadow-lg inline-flex items-center space-x-2"
            >
              <span>Ver Más Momentos</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Indicador de progreso */}
            <p className="text-sm text-gray-500 mt-3">
              Mostrando {visibleImages} de {totalImages} imágenes
            </p>
          </div>
        )}

        {/* Mensaje cuando se han mostrado todas las imágenes */}
        {!hasMoreImages && totalImages > imagesPerRow && (
          <div className="text-center mt-12">
            <p className="text-lg text-cream-700 font-medium">
              ¡Has visto todos nuestros momentos especiales!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {totalImages} imágenes de nuestros encuentros artísticos
            </p>
          </div>
        )}
      </div>

      {/* Modal Lightbox - Sin cambios */}
      {showModal && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Cerrar galería"
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

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Imagen anterior"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Imagen siguiente"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Main image */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/jayei${selectedImage}.jpg`}
                alt={`Momento JAYEI ${selectedImage}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">
                  {selectedImage} de {totalImages}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
