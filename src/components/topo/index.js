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
      <div className="bg-topo py-2 md:py-3 px-4 md:px-1">
        <Fade>
          <div className="topo-text pt-2 md:pt-0">
            Lançamento Boulevard de Rosé</div>
          <div className="flex-col pl-12 md:pl-52 pt-24 md:pt-36 pb-24 px-10 md:px-0">
            <img
              src={boulevard}
              width="300"
            />
          </div>
          <div className="ml-6 md:ml-32">

            <div className="flex ">
              <img src={topo} className="w-auto md:w-2/5 pb-6" />
            </div>

            <div className="flex justify-center md:justify-start mt-12  pr-12 md:pr-40 mb-32">
              {/* <form action="form-page" method="post">
                <label for="name" className="font-black family-bold ml-2">
                  Nome:*
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="formulario family-bold pl-4 py-2 mb-3 w-full"
                  placeholder="Digite seu nome"
                />

                <label for="tel" className="font-black family-bold ml-2">
                  Whatsapp:*
                </label>
                <br />
                <input
                  id="tel"
                  name="user_message"
                  className="formulario family-bold pl-4 py-2 mb-3 w-full"
                  placeholder="(xx)xxxxx-xxxx"
                />
                <br />
                <label for="mail" className="font-black family-bold ml-2">
                  E-mail:*
                </label>
                <br />
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  className="formulario family-bold pl-4 py-2 mb-3 w-full"
                  placeholder="Digite seu email"
                /> */}

              <button
                onClick={() => window.modalModal()}
                className="w-auto md:w-2/5 flex justify-center py-3 px-20 sm:px-44 md:px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              >
                Cadastre-se
              </button>
              {/* </form> */}
            </div>

            <div className="fixed right-10 md:right-2 bottom-24 md:bottom-18 whats-message">
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
