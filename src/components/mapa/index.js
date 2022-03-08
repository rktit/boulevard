import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import mapa from '../../assets/static/mapa.png'
import local from '../../assets/icon/local.png'
import visite from '../../assets/file/visite-local.png'
import previlegiada from '../../assets/file/previlegiada.png'


export default function Page(props) {
  return (
    <ScrollableAnchor id={'mapa'}>
      <div className="flex">
        <Fade duration={2000}>
          <div className="w-full flex flex-col pl-0 md:pl-24 py-12">
            <div className="flex grid">
              <div className="absolute mapa-title pt-4 pl-24 md:pl-52">
                Localização
              </div>
              <div className="pl-8 pt-10">
                <img src={previlegiada} className="w-4/5 md:w-2/4" />
              </div>
            </div>

            <div className="flex flex-col">
              <img src={mapa} className="w-auto md:w-6/8" />

              <div className="w-full">
                <div className="flex flex-grid items-center justify-center">
                  <a
                    className="noHover"
                    target="_blank"
                    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4129870368565!2d-47.41770388499601!3d-22.750049938016616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89db1ed5dbaa1%3A0xc3901b2acf19fceb!2sResidencial%20Boulevard%20de%20Ros%C3%A9!5e0!3m2!1sen!2sbr!4v1646405277988!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'
                  >
                    <img src={local} className="w-4/5 md:w-1/8 justify-items-center justify-center pl-10 md:pl-0" />
                  </a>

                  <div className="text-center family-semibold mt-4 md:mt-2 mapa-address pr-14 md:pr-0">
                    Avenida Tiradentes, 457 - Vila Mac Knight
                    <br />
                    Santa Bárbara D'Oeste/SP
                  </div>
                </div>

                <div className="flex flex-row justify-center pt-6 md:pt-12">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519991255659" >
                    <img src={visite} className="w-auto md:w-4/5 pl-10 md:pl-64 pr-10 md:pr-0" />
                  </a>
                </div>
              </div>

            </div>
          </div>


        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
