import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import morada from '../../assets/logo/logo-morada.png'
import vida from '../../assets/file/sua-vida.png'
import whats from '../../assets/icon/whatsapp.png'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    <ScrollableAnchor id={'home'}>
      <div className="flex justify-center plantas pb-14 md:pb-12 lg:pb-2 pt-4 md:pt-0">
        <Fade>
          <div className="flex flex-col md:flex-grid lg:flex-row pt-0 md:pt-32 lg:pt-40">
            <img
              src={morada}
              className="mt-2 md:mt-10 mr-2 md:mr-32"
              width="600 sm:300" />


            <div className="w-full flex flex-col justify-end pb-2 md:pb-40 pl-14 md:pl-0">
                <div className="font-red family-regular font-big">
                  Obrigado!
                </div>
                <div className="font-red family-regular font-regular md:font-medium pr-14 md:pr-0">Recebemos seu contato e em breve retornaremos
              </div>

              <button
                onClick={() => window.location = "https://www.caprem.com.br/morada-do-porto"}
                className="w-5/6 md:w-1/10 flex justify-center py-3 px-4 mt-4 mb-8 border border-transparent font-medium rounded-lg text-white button-cadastro">Saiba Mais
              </button>
            </div>
          </div>
        </Fade>

        <div className="fixed right-2 bottom-20 md:bottom-12 whats-message">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519974139043"
          >
            <img
              className="flex items-end mr-4 md:mr-28 w-10 md:w-14"
              src={whats}
              alt="Whatsapp"
            />
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  )
}
