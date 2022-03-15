import React, { useEffect, useState } from "react";

import caprem from "../../assets/logo/logo-caprem.png";
import facebook from "../../assets/icon/face.png";
import instagram from "../../assets/icon/insta.png";

export default function Page(props) {
  const [loading, setLoading] = useState(false);
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <div className="bg-black">

      <div className="flex flex-col md:flex-row justify-center ml-4 md:ml-52 pl-4 md:pl-52 pt-6 md:pt-0">

        <div className="flex items-center pl-14 sm:pl-4 md:pl-0">
          <div className="w-2/3 sm:w-4/5 md:w-4/5 pr-0 md:pr-14 pb-2 md:pb-0 px-4 sm:px-48 md:px-0">
            <img src={caprem} alt="Caprem Construtora" />
          </div>
        </div>

        <div className="pb-10 md:pb-0 mr-10 md:mr-52 pr-10 md:pr-60 pt-0 md:pt-10 px-14 sm:px-48 md:px-0">
          <div className="flex flex-row ">
            <a className="w-8 md:w-10 pl-2 md:pl-0 "
              href="https://www.facebook.com/capremconstrutora/"
              target="_blank"
              rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="w-8 md:w-12 pl-2 md:pl-0 "
              href="https://www.instagram.com/caprem.construtora/"
              target="_blank"
              rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>

            <div className="flex font-small md:font-medium family-montmedium items-center pl-2 md:pl-0">
              @capremconstrutora</div>
          </div>

          <div className="font-medium md:font-regular family-medium tracking-widest ml-2 md:ml-0 mb-0 md:mb-6">
            <a href="https://www.caprem.com.br/"
              target="_blank"
              rel="noreferrer">www.caprem.com.br
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="rodape-title">
          Todas as imagens utilizadas nesta página são meramente ilustrativas. Possíveis alterações de projeto <br />
          serão executadas de acordo com o Memorial Descritivo do empreendimento.
        </div>
        <div className="rodape-text pt-4">
          Incorporação registrada sob no R.1 da matrícula 72.731 do Oficial de Registro de Imóveis e Anexos de Santa Bárbara D’Oeste – Estado de São Paulo, nos termos da Lei 4.591/64
        </div>
      </div>
    </div>
  )
}