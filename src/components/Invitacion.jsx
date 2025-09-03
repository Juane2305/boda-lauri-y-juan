import CountdownCircles from "./CountdownCircles";
import Lugares from "./Lugares";
import GoogleCalendarButton from "./GoogleCalendarButton";
import Asistencia from "../components/Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import DatosBancarios from "./DatosBancarios";
import dresscode from "../assets/dress-code.png";
import hojasVerdesIzq from "../assets/hojasVerdesIzq.svg";
import hojasVerdes2 from "../assets/hojasVerdes2.svg";
import DressCodeVintage from "./DressCodeVintage";
import InfoUtil from "./InfoUtil";
import Contactos from "./Contactos";
import MusicScreen from "./MusicScreen";
import cancion from "../assets/song.mp3";

const Invitacion = () => {
  const targetDate = new Date("2025-11-01T00:00:00-03:00");

  const colorPrincipal = "#faf3e0";

  return (
    <div className="w-full font-vintageText relative overflow-hidden bg-[#FAF3E0]">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>
      <div className="fixed inset-0 -z-10 bg-cover bg-center"></div>
      <div className="fixed top-4 right-4 z-50"></div>
      <div className="flex flex-col justify-center items-center h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740755815/Disen%CC%83o_Elegante_gem3ut_xq0rzs.webp')] bg-cover bg-no-repeat bg-center md:bg-fixed border-b-2 border-[#D4AF37] relative">
        <h2 className="text-3xl md:text-5xl text-lime-900 z-10 italic mb-4">
          ¡Nos casamos!
        </h2>
        <h1 className="text-5xl md:text-8xl  text-gold z-10 italic">
          Lauri & Juan
        </h1>
        <p className="mt-8 text-2xl text-lime-900">01 . 11 . 2025</p>
      </div>

      <div className="relative z-10">
        <section
          id="contador"
          className="bg-[#A3B18A] text-white py-10 border-b-2 border-[#D4AF37]"
        >
          <CountdownCircles
            targetDate={targetDate}
            containerClasses="my-8 font-thin"
            backgroundColor="#e5e7eb"
            progressColor="#D4AF37"
            textColor="#ffffff"
            valueClassName="text-3xl font-bold"
            labelClassName="text-base font-light"
          />
        </section>
        <section id="lugares" className="py-10 border-b-2 border-[#D4AF37]">
          <Lugares />
        </section>
        <InfoUtil />

        {/* <section className="relative my-10 pb-10 border-b-2 border-[#D4AF37]">
            <GalleryVintage
              images={[
                {
                  index: 1,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503382/a802573d-dd83-4491-b270-136bc54ee441_fwtkjh.jpg",
                },
                {
                  index: 2,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503382/de2e89dc-dfc2-4b2f-849d-4fda8d2cb42c_xnsse0.jpg",
                },
                {
                  index: 3,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756503381/a5ffa704-6de2-46d7-a40f-3628a3f42ba5_ctympj.jpg",
                },
              ]}
            />
          </section> */}
        <section className="bg-[#A3B18A] py-10 text-white text-center">
          <GoogleCalendarButton
            titleCalendar="Boda de Lauri y Juan"
            salon="Iglesia Nuestra Señora del Rosario de Tilcara, Jujuy"
            fechaComienzo="20251101T130000"
            fechaFin="20251102T010000"
          />
        </section>
        <section className="relative mt-10 border-b-2 border-[#D4AF37]">
          <img
            src={hojasVerdesIzq}
            alt="Decoración"
            className="absolute left-[-80px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
          />
          <DressCodeVintage dress_code={dresscode} />
          <img
            src={hojasVerdes2}
            alt="Decoración"
            className="absolute right-[-80px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
          />
        </section>
        <section className="border-b-2 border-[#D4AF37]">
          <DatosBancarios
            tituloBoton="Datos bancarios de Lauri"
            tituloModal="Datos Bancarios de Lauri"
            texto="El valor de la tarjeta es de $175.000 por persona. Muchas gracias por ser parte de este momento tan importante para nosotros."
            cbu="0070121730004165984723"
            alias="casorio.lau.juan"
            banco="Banco Galicia"
            nombre="María Laura Areal"
            claseContenedor="bg-[#FAF3E0] py-10 text-center text-black"
            claseBoton="border-[#A3B18A] text-white bg-[#A3B18A] hover:bg-transparent hover:text-green-900 text-xl"
            textSize="text-xl"
            background={{ backgroundColor: colorPrincipal }}
            claseBotonModal={{
              backgroundColor: "#d4af37",
              borderColor: "#d4af37",
            }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            claseModal="bg-black"
            borderModal="border-gold"
            textColor="text-gold"
          />
        </section>
        <Contactos />
        <section className="">
          <Asistencia
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSftUX80TUVEWK73cr4DZFK7uge1fa6GeC-5P6e4KgjdR_bprQ/viewform?usp=dialog"
            clase="py-10 bg-[#FAF3E0]"
            claseButton="border-[#a8ad9a] text-white bg-[#a8ad9a] hover:bg-transparent hover:text-green-900 text-xl border-2 border-[#a8ad9a] cursor-pointer"
          />
        </section>
        <TextoFinal
          textClass="text-xl italic"
          textoFinal="Tu presencia es nuestro mejor regalo"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
