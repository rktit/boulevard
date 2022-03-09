import React from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import descricao from '../../assets/file/descricao.png'
import foto1 from '../../assets/static/descricao1.png'
import foto2 from '../../assets/static/descricao2.png'
import foto3 from '../../assets/static/descricao3.png'

export default function Page() {
  return (
    <ScrollableAnchor id={'descrição'}>
      <div className="bg-white">
        <Fade left duration={2000}>
          <div className="flex">
            <div className="flex items-start pl-12">
              <div className="descricao-img py-4">
                <img src={foto1} />
              </div>
              <div className="descricao-img py-12">
                <img src={foto2} className="pt-48" />
              </div>
              <div className="descricao-img py-4">
                <img src={foto3} />
              </div>

            </div>
            <div className="flex flex-wrap ml-0 md:ml-24">
                <img src={descricao} className="w-3/4 md:w-2/4" />

              <div className="pt-10 pb-16">
                <a
                  // onClick={() => window.modalModal()}
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519974139043"
                  className="w-auto md:w-full flex justify-center py-3 px-10 md:px-24 mt-2 border border-transparent font-medium rounded-lg text-white button-cadastro">
                  Fale com um corretor
                </a>
              </div>
            </div>
          </div>

        </Fade>


      </div>
    </ScrollableAnchor>
  )
}
