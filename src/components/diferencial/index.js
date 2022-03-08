import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import aquecimento from '../../assets/icon/aquecimento.png'
import usb from '../../assets/icon/usb.png'
import estendido from '../../assets/icon/estendido.png'
import arCondicionado from '../../assets/icon/arCondicionado.png'
import elevador from '../../assets/icon/elevador.png'

import diferencial from '../../assets/file/Diferenciais.png'



export default function Page(props) {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <ScrollableAnchor id={'diferencial'}>
      <div className="py-20">
        <Fade>
          <div className="flex flex-col justify-center items-center">
            <div className="justify-center">
              <img src={diferencial} className="w-2/2 md:w-full px-6 md:px-0" />
            </div>
            <div className="diferencial-content mx-0 md:mx-20 pt-10 md:pt-24">

              <div className="diferencial-item">
                <img src={aquecimento} className="diferencial-box" />
                <div className="flex diferencial-text px-0 md:px-20">
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
                <div className="flex diferencial-text px-0 md:px-20">Opção de Living Estendido
                </div>
              </div>

              <div className="diferencial-item">
                <img src={arCondicionado} className="diferencial-box pt-4 md:pt-0" />
                <div className="flex diferencial-text px-0 md:px-20">Pontos de Ar Condicionado
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
