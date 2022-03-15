import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import boulevard from '../../assets/logo/logoBoulevard.png'
import topo from '../../assets/file/topo.png'
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
      <div className="bg-topo">
        <Fade>
          <div className="absolute flex topo-text pt-1">
            Aprecie a vida!</div>
          <div className="flex flex-col">
            <img
              src={boulevard}
              className="ml-0 sm:ml-14 md:ml-36 px-6 md:px-0"
              width="400 sm:300"
            />
          <div className="ml-10 md:ml-32">

            <div className="flex pt-14 sm:pt-4 md:pt-0">
              <img src={topo} className="w-auto pr-8 md:pr-0" />
            </div>

            <div className="flex justify-center md:justify-start mt-0 md:mt-12 pr-14 md:pr-40 mb-10 md:mb-32 pl-6 md:pl-0">

              <button
                onClick={() => window.modalModal()}
                className="w-auto md:w-2/5 flex justify-center py-3 px-20 sm:px-44 md:px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Cadastre-se
              </button>
            </div>
              </div>

            <div className="fixed right-6 md:right-2 bottom-10 md:bottom-8 whats-message">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5519991255659"
              >
                <img
                  className="flex items-start md:items-end mr-2 md:mr-28 w-10 md:w-14"
                  src={whats}
                  alt="Whatsapp"
                />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
