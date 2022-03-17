import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import conceito from '../../assets/background/conceito.jpeg'
import descricao from '../../assets/file/descricao.png'
import foto1 from '../../assets/static/descricao1.png'
import foto2 from '../../assets/static/descricao2.png'
import foto3 from '../../assets/static/descricao3.png'
import foto4 from '../../assets/static/descricaoTodas.png'


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
              <div className="pt-12">
              <button
                onClick={() => window.modalModal()}
                  className="w-auto flex justify-center py-3 px-10 sm:px-20 mt-2 border border-transparent font-medium rounded-lg text-white button-cadastro">
                  Fale com um corretor
                </button>
              </div>
            </div>
            <img src={conceito} className="w-auto" />
    </div>
    :
    <ScrollableAnchor id={'descrição'}>
      <div className="bg-white">
        <Fade left duration={2000}>
          <div className="flex flex-row md:flex-row mx-6">
            <div className="flex-auto w-3/4 px-12 pb-4">
              <div className="flex-auto w-full">
                <img src={foto4} />
              </div>
            </div>
            <div className="flex-auto w-1/4  pr-4">
              <img src={descricao} className="pt-20"/>

              <div className="pt-12 pb-14 px-4">
              <button
                onClick={() => window.modalModal()}
                  className="w-96 md:w-auto flex justify-center py-4 sm:px-10 px-28 mt-2 border border-transparent font-medium rounded-lg text-white button-cadastro">
                  Fale com um corretor
                </button>
              </div>
            </div>
          </div>
          <img src={conceito} className="w-auto" />
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
