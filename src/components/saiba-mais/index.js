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
      <div className="bg-topo w-auto pt-24 md:pt-72 py-6 md:py-16">
        <Fade>
          <div className="flex flex-col md:flex-row">
            <div className="pb-12 md:pb-52 pr-8 md:pr-0 pl-8 md:pl-64 ">
              <img
                src={boulevard}
                width="400"
              />
            </div>
            <div className="ml-6 md:ml-32">
              <div className="w-full flex flex-col pb-2 md:pb-40 pl-4 md:pl-12">
                <div className="font-black family-regular font-big">
                  Obrigado!
                </div>
                <div className="font-black family-regular font-regular pr-14 md:pr-0">Recebemos seu contato e em breve retornaremos
                </div>

                <button
                  onClick={() => window.location = "https://www.caprem.com.br/boulevard-rose"}
                  className="w-5/6 md:w-1/10 flex justify-center py-3 px-4 mt-4 mb-8 border border-transparent font-medium rounded-lg text-white button-cadastro">Saiba Mais
                </button>
              </div>
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
