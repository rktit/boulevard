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
      <div className="bg-topo px-4 md:px-1 py-24">
        <Fade>
          <div className="topo-text">
            Aprecie a vida!</div>
          <div className="flex-col pl-12 md:pl-52 pt-24 md:pt-36 pb-24 px-10 md:px-0">
            <img
              src={boulevard}
              width="300"
            />
          </div>
          <div className="ml-6 md:ml-32">
            <div className="w-full flex flex-col pb-2 md:pb-40 pl-4 md:pl-12">
              <div className="saiba-title">
                Obrigado!
              </div>
              <div className="saiba-text">
                Recebemos seu contato e em breve retornaremos
              </div>

              <button
                className="w-auto md:w-2/5 flex justify-center py-3 px-20 sm:px-44 md:px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
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
