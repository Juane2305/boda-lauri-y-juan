import copas from '../assets/copas.svg'
import church from '../assets/church.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-16'>
      <section className='flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3  md:w-[50%]' data-aos= 'fade-right'>
          <img src={church} alt="" className='size-35'/>
          <h2 className='text-center font-semibold text-3xl tracking-wider italic'>Ceremonia</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>La ceremonia se realizará en <strong>Nuestra señora del Rosario de Tilcara</strong> a las <strong>15:30 hs</strong></p>
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/aCFg7Crfrh7vhhEeA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-[#D4AF37] py-3 px-8 rounded-full bg-[#D4AF37] text-white font-bold hover:bg-[#FAF3E0] hover:text-[#D4AF37] transition cursor-pointer">
                CÓMO LLEGAR
              </button>
            </a>
          </div>
        </div>
        <div className=' flex flex-col justify-center items-center gap-y-3 md:w-[50%]' data-aos= 'fade-left'>
          <img src={copas} alt="" className='size-40'/>
          <h2 className='text-center font-semibold text-3xl tracking-wider italic'>Civil y Fiesta</h2>
          <p className='font-extralight text-xl text-center px-5 text-gray-700'>Continuaremos con el civil y fiesta en <strong>Viñedo Yacoraite, ubicado en la Quebrada de Humahuaca a 18 Km de Tilcara</strong> a las 16:45 hs</p>
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/mLKR7smfZcYCcN2P7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-[#D4AF37] py-3 px-8 rounded-full bg-[#D4AF37] text-white font-bold hover:bg-[#FAF3E0] hover:text-[#D4AF37] transition cursor-pointer">
                CÓMO LLEGAR
              </button>
            </a>
          </div>
        </div>
      </section>
        
    </div>
  )
}

export default Places