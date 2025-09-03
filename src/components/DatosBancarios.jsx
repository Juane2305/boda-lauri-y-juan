import { Modal } from './Modal'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './DatosBancariosIcon';


const DatosBancarios = ({tituloBoton, tituloModal, texto, claseContenedor, claseBoton, borderModal, textColor, textSize, cbu, alias, banco, nombre, claseBotonModal, claseModal, moneda_extranjera, tipo_cuenta, numero_cuenta, titular_extranjera, banco_extranjera, styleBotonModal, styleModal, styleBorderModal, styleTextColor, background}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 ${claseContenedor}`} style={background} >
      <div data-aos= 'fade-up'>
        <MiIconoGift/>
      </div>
          <p className={`text-center px-5 md:px-0 ${textSize}`} data-aos= 'fade-up'>{texto}</p>
      <div className='flex flex-col md:flex-row gap-x-10 justify-center items-center'>

        <div className={`flex flex-col items-center justify-center`}>
          <Modal 
            tituloBoton={tituloBoton}
            tituloModal={tituloModal}
            claseBoton={claseBoton} 
            claseBotonModal={claseBotonModal} 
            claseModal={claseModal} 
            borderModal={borderModal} 
            textColor={textColor} 
            styleBotonModal={styleBotonModal} 
            styleModal={styleModal} 
            styleBorderModal={styleBorderModal} 
            styleTextColor={styleTextColor} 
            cbu={cbu} 
            alias={alias} 
            banco={banco} 
            nombre={nombre} 
            moneda_extranjera={moneda_extranjera} 
            tipo_cuenta={tipo_cuenta} 
            numero_cuenta={numero_cuenta} 
            titular_extranjera={titular_extranjera} 
            banco_extranjera={banco_extranjera}/>
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <Modal 
            tituloBoton="Datos Bancarios de Juan"
            tituloModal="Datos bancarios de Juan"
            claseBoton={claseBoton} 
            claseBotonModal={claseBotonModal} 
            claseModal={claseModal} 
            borderModal={borderModal} 
            textColor={textColor} 
            styleBotonModal={styleBotonModal} 
            styleModal={styleModal} 
            styleBorderModal={styleBorderModal} 
            styleTextColor={styleTextColor} 
            nombre="Juan Pablo Issa Aguirre"
            cbu="0000076500000026078995"
            alias="juan.laura.casorio"
            banco="Personal Pay"
            moneda_extranjera={moneda_extranjera} 
            tipo_cuenta={tipo_cuenta} 
            numero_cuenta={numero_cuenta} 
            titular_extranjera={titular_extranjera} 
            banco_extranjera={banco_extranjera}/>
        </div>
      </div>
    </div>
  )
}

export default DatosBancarios