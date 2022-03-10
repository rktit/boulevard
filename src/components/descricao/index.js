import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import descricao from '../../assets/file/descricao.png'
import foto1 from '../../assets/static/descricao1.png'
import foto2 from '../../assets/static/descricao2.png'
import foto3 from '../../assets/static/descricao3.png'


export default function Page(props) {
  const [isMobile] = useState(utils.mobile());
  const arrayFotos=[
    {foto: foto1},
    {foto: foto2},
    {foto: foto3},
  ]
  
  const renderImg = (el) => {
    return(
      <SplideSlide className="d-flex justify-center items-center">
        <div className="diferencial-item">
          <img src={el.foto} className="" />
          <div className="d-flex diferencial-text">
            {el.descricao}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
    <div className="">
      <Fade>
        <div className="d-flex flex-col justify-center items-center">
          <div className="diferencial-content">
            <Splide
              className="splide-badges col-12"
                options={{
                rewind: true,
                width: '100%',
                gap: '0rem',
                perPage: 1,
                pagination: true,
                arrows: false,
              }}
            >
              {arrayFotos.map(el => { return(renderImg(el))})}
            </Splide>
          </div>
        </div>
      </Fade>
      <div className="flex flex-wrap px-10 py-10 place-content-center	">
              <img src={descricao} className="w-auto	" />

              <div className="pt-12 pl-6">
                <a
                  // onClick={() => window.modalModal()}
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519974139043"
                  className="w-auto flex justify-center py-4 px-10 mt-2 border border-transparent font-medium rounded-lg text-white button-cadastro">
                  Fale com um corretor
                </a>
              </div>
            </div>
    </div>
    :
    <ScrollableAnchor id={'descrição'}>
      <div className="bg-white">
        <Fade left duration={2000}>
          <div className="flex flex-col md:flex-row">
            <div className="flex pl-12 pr-12 md:pr-0">
              <div className="descricao-img">
                <img src={foto1} />
              </div>
              <div className="descricao-img">
                <img src={foto2} className="pt-52" />
              </div>
              <div className="descricao-img">
                <img src={foto3} />
              </div>

            </div>
            <div className="flex flex-wrap py-12 pl-36 pr-12">
              <img src={descricao} className="w-2/3	" />

              <div className="pt-12">
                <a
                  // onClick={() => window.modalModal()}
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519974139043"
                  className="w-auto flex justify-center py-4 px-40 mt-2 border border-transparent font-medium rounded-lg text-white button-cadastro">
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
