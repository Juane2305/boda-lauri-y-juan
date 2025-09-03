import React, { useState } from "react";
import { createPortal } from "react-dom";

const InfoUtil = () => {
  const [openHotel, setOpenHotel] = useState(false);
  const [openTransporte, setOpenTransporte] = useState(false);
  return (
    <section className="py-10 border-b-2 border-[#D4AF37] bg-[#FAF3E0]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl italic text-lime-900 mb-6">
          Info útil
        </h3>
        <p className="text-lime-900/80 mb-6 leading-relaxed text-xl">
          Reunimos algunos datos para que puedan organizarse mejor el día del casamiento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => setOpenHotel(true)}
            className="px-6 py-3 text-xl border-2 rounded-md bg-[#a8ad9a] border-[#a8ad9a] text-white hover:bg-transparent hover:text-green-900 transition-colors"
          >
            Alojamiento sugerido
          </button>
          <button
            type="button"
            onClick={() => setOpenTransporte(true)}
            className="px-6 py-3 text-xl border-2 rounded-md bg-[#a8ad9a] border-[#a8ad9a] text-white hover:bg-transparent hover:text-green-900 transition-colors"
          >
            Transporte
          </button>
        </div>
      </div>

      {/* Modal Alojamiento */}
      {openHotel &&
        createPortal(
          <div className="fixed inset-0 z-[2000] flex items-center justify-center" role="dialog" aria-modal="true">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpenHotel(false)}
              aria-hidden="true"
            />
            <div className="relative bg-[#FAF3E0] border-2 border-[#D4AF37] rounded-md shadow-xl max-w-lg w-[92%] p-6 text-left">
              <h4 className="text-2xl md:text-3xl italic text-lime-900 mb-4">Alojamiento sugerido</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-lime-900">Opción 1: Tilcara</h5>
                  <p className="text-lime-900/90 leading-relaxed">
                    A 18 km de Yacoraite. La ceremonia se realiza en la <span className="font-semibold">Iglesia de Tilcara</span>.
                  </p>
                  <ul className="list-disc list-inside text-lime-900/90 mt-2 space-y-1">
                    <li>Hotel Viento Norte</li>
                    <li>Hotel Tulmas</li>
                    <li>Posada de Luz</li>
                    <li>La Llama Negra</li>
                    <li>Hotel Antigua Tilcara</li>
                    <li>Las Marías Hotel Boutique</li>
                    <li>Hotel El Reposo Del Diablo</li>
                    <li>Bella Tilcara Hotel Boutique</li>
                    <li>Patio Alto</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-lime-900">Opción 2: Huacalera</h5>
                  <p className="text-lime-900/90 leading-relaxed">Hotel Huacalera a 8 km del viñedo.</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpenHotel(false)}
                  className="px-5 py-2 border-2 rounded-md bg-[#a8ad9a] border-[#a8ad9a] text-white hover:bg-transparent hover:text-green-900 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>,
          document.getElementById('modal-root') || document.body
        )}

      {/* Modal Transporte */}
      {openTransporte &&
        createPortal(
          <div className="fixed inset-0 z-[2000] flex items-center justify-center" role="dialog" aria-modal="true">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpenTransporte(false)}
              aria-hidden="true"
            />
            <div className="relative bg-[#FAF3E0] border-2 border-[#D4AF37] rounded-md shadow-xl max-w-lg w-[92%] p-6 text-left">
              <h4 className="text-2xl md:text-3xl italic text-lime-900 mb-4">Transporte</h4>
              <p className="text-lg text-lime-900/90 leading-relaxed">
                Para parejas o grupos <span className="font-semibold">sin conductor asignado</span> les daremos opciones de
                transporte para que puedan trasladarse seguros y cómodos de la iglesia/alojamiento al viñedo y viceversa.
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpenTransporte(false)}
                  className="px-5 py-2 border-2 rounded-md bg-[#a8ad9a] border-[#a8ad9a] text-white hover:bg-transparent hover:text-green-900 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>,
          document.getElementById('modal-root') || document.body
        )}
    </section>
  );
};

export default InfoUtil;
