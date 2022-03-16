import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import mapa from '../../assets/static/mapa.jpeg'
import visite from '../../assets/file/visite-local.png'
import previlegiada from '../../assets/file/local.png'


export default function Page(props) {
  return (
    <ScrollableAnchor id={'mapa'}>
      <div className="flex flex-col">
        <Fade duration={2000}>
          <div className="w-full flex flex-col">
          <div className="pl-0 md:pl-64 pt-10 md:pt-20">
            <img src={previlegiada} className="w-auto md:w-2/5 px-10 md:px-0" />
              <img src={mapa} className="w-auto md:w-4/4 pr-10 md:pr-72 px-10 md:px-0" />
            </div>
            <div className="w-full">
              <div className="flex flex-grid items-center justify-center">
                <a
                  className="noHover"
                  target="_blank"
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4129870368565!2d-47.41770388499601!3d-22.750049938016616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89db1ed5dbaa1%3A0xc3901b2acf19fceb!2sResidencial%20Boulevard%20de%20Ros%C3%A9!5e0!3m2!1sen!2sbr!4v1646405277988!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'
                >
                  <div className="text-center mapa-address pt-4">
                    Avenida Tiradentes, 457 - Vila Mac Knight
                    <br />
                    Santa Bárbara D'Oeste/SP
                  </div>
                </a>
              </div>

              <div className="relative flex flex-row justify-center text-center self-center pt-6 md:pt-10 pb-6 md:pb-14">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519991255659" >
                  <img src={visite} className="w-auto md:w-full px-10 md:px-0" />
                  <div className="absolute mapa-visite pl-20 sm:pl-44 md:pl-52">
                    visite o decorado no local
                  </div>
                  <div className="absolute mapa-whats pl-16 sm:pl-32 md:pl-32">
                    Agende sua visita pelo Whatspp: (19) 99125.5659
                  </div>
                </a>
              </div>
            </div>
          </div>

        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
