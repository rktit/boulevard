import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import boulevard from '../../assets/logo/logoBoulevard.png'
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
      <div className="bg-topo h-screen">
        <Fade>
          <div className="flex-col">
            <div className="pr-6 md:pr-0 pl-6 md:pl-48">
              <img
                src={boulevard}
                width="400"
              />
            </div>
            <div className="pl-20 md:pl-48">

              <div className="saiba-title pb-4 md:pb-10 pt-10">
                Obrigado!
              </div>
            </div>

            <div className="flex items-start pl-4 md:pl-40">

              <div className="saiba-text text-center">
                Seu contato já está conosco! <br />
                Em breve entraremos em contato com você.
              </div>
            </div>

            <div className="pl-20 md:pl-72">

              <button
                onClick={() => window.location = "https://www.caprem.com.br/boulevard-de-rose"}
                className="w-auto flex justify-center py-3 px-20 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Saiba Mais
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
