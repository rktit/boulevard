import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import aquecimento from '../../assets/icon/aquecimento.png'
import usb from '../../assets/icon/usb.png'
import estendido from '../../assets/icon/estendido.png'
import arCondicionado from '../../assets/icon/arCondicionado.png'
import elevador from '../../assets/icon/elevador.png'

import diferencial from '../../assets/file/Diferenciais.png'



export default function Page(props) {
  const [isMobile] = useState(utils.mobile());
  const arrayFotos=[
    {foto: aquecimento, descricao: 'Chuveiros e Torneiras Aquecidas'},
    {foto: usb, descricao: 'Pontos USB'},
    {foto: estendido, descricao: 'Opção de Living Estendido'},
    {foto: arCondicionado, descricao: 'Pontos de Ar Condicionado'},
    {foto: elevador, descricao: '2 Elevadores por Torre'},
  ]
  
  const renderImg = (el) => {
    return(
      <SplideSlide className="flex justify-center items-center">
        <div className="diferencial-item">
          <img src={el.foto} className="" />
          <div className="flex diferencial-text">
            {el.descricao}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
    <div className="py-10">
      <Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="justify-center">
            <img src={diferencial} className="px-10 pt-8" />
          </div>
          <div className="diferencial-content pt-5">
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
    </div>
    :
    <ScrollableAnchor id={'diferencial'}>
      <div className="py-20">
        <Fade>
          <div className="flex flex-col items-center">
            <div className="justify-center">
              <img src={diferencial} className="w-auto px-6 md:px-0" />
            </div>
            <div className="diferencial-content mx-0 md:mx-20 pt-10 md:pt-24">

              <div className="diferencial-item">
                <img src={aquecimento} className="diferencial-box" />
                <div className="flex diferencial-text px-0 md:px-10">
                  Chuveiros e Torneiras Aquecidas
                </div>
              </div>

              <div className="diferencial-item">
                <img src={usb} className="diferencial-box pt-4 md:pt-0" />
                <div className="flex diferencial-text px-0 md:px-20">Pontos USB
                </div>
              </div>

              <div className="diferencial-item">
                <img src={estendido} className="diferencial-box pt-4 md:pt-0" />
                <div className="flex diferencial-text px-0 md:px-10">Opção de Living Estendido
                </div>
              </div>

              <div className="diferencial-item">
                <img src={arCondicionado} className="diferencial-box pt-4 md:pt-0" />
                <div className="flex diferencial-text px-0 md:px-20">Pontos de Ar-Condicionado
                </div>
              </div>

              <div className="diferencial-item">
                <img src={elevador} className="diferencial-box pt-4 md:pt-0" />
                <div className="flex diferencial-text px-0 md:px-20">2 Elevadores por Torre
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
