import React from "react";

const Contactos = () => {
  return (
    <section className="py-10 border-b-2 border-[#D4AF37] bg-[#a8ad9a] text-center">
      <h3 className="text-3xl italic text-white mb-6">
        Consultas
      </h3>
      <p className="text-white/90 mb-6 text-lg">
        Si tenés alguna consulta podés comunicarte aquí:
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-xs mx-auto flex flex-col gap-4">
          <a
            href="https://wa.me/543856861628"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 text-xl border-2 rounded-md bg-white border-white text-gray-800 hover:bg-transparent hover:text-white transition-colors"
          >
            Invitados de Lauri (Patri)
          </a>
          <a
            href="https://wa.me/543854868582"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 text-xl border-2 rounded-md bg-white border-white text-gray-800 hover:bg-transparent hover:text-white transition-colors"
          >
            Invitados de Juan (Mili)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
