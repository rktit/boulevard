import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Diferencial } from '../'

import plantas from '../../assets/file/Plantas.png'

import planta68 from '../../assets/static/planta_68.png'
import planta82 from '../../assets/static/planta_82.png'
import planta82Sala from '../../assets/static/planta_82_sala.png'
import duplexAB1 from '../../assets/static/duplex_AB1.png'
import duplexAB2 from '../../assets/static/duplex_AB2.png'
import duplexC1 from '../../assets/static/duplex_C1.png'
import duplexC2 from '../../assets/static/duplex_C2.png'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { getAllByTestId } from '@testing-library/react'

export default function Page(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  const moveSlide = (value) => {
    ref.current.splide.go(value);
  }
  const arrayFotos = [
    { planta: planta68, button: 'Planta 69m³' },
    { planta: planta82, button: 'Planta 82m³' },
    { planta: planta82Sala, button: 'Planta 82m³' },
    { planta: duplexAB1, button: 'Duplex Torre AB' },
    { planta: duplexAB2, button: 'Duplex Torre AB' },
    { planta: duplexC1, button: 'Duplex Torre C' },
    { planta: duplexC2, button: 'Duplex Torre C' },
  ]
  const renderImg = (el) => {
    return (
      <SplideSlide className="flex-auto place-content-center">
        <img src={el.planta} className="px-1" />
        <div className="flex items-center justify-center">
          <div className="button flex items-center justify-center mt-6 place-content-center">
            {el.button}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-familia">
        <div className="flex-auto flex-col pr-10 pb-4" >
          <div className="familia-title">
            <div className="leading-tight pl-10 px-2" >
              A perfeita combinação<br />
              entre <strong>viver</strong> e se <strong>divertir</strong>!
            </div>
          </div>
          <div className="leading-none familia-text pl-8">
            <br />
            Desfrute de momentos incríveis em<br />
            <strong>apartamentos de 69 e 82m²</strong>, com plantas flexíveis.
          </div>
        </div>
        <div className="flex py-8 place-content-center">
          <img src={plantas} className="w-auto justify-center items-center" />
        </div>
        <div className="flex-auto box-mobile mx-1 justify-center items-center">
          <div className="justify-center self-center ">
            <Splide
              className="splide-badges col-12"
              options={{
                rewind: true,
                width: '100vw',
                height: 'auto',
                gap: '0rem',
                perPage: 1,
                pagination: false,
                arrows: true,
              }}
            >
              {arrayFotos.map(el => { return (renderImg(el)) })}

            </Splide>
          </div>
        </div>
        <Diferencial />
      </div>

      :
      <ScrollableAnchor id={'planta'}>
        <div className="bg-familia">
          <div className="flex flex-col pl-0 md:pl-52 pr-10 md:pr-0">
            <div className="familia-title pl-0 md:pl-96 pt-0 md:pt-40">
              <div className="leading-tight pl-8 md:pl-0 px-4 md:px-0">
                A perfeita combinação<br />
                entre <strong>viver</strong> e se <strong>divertir</strong>!
              </div>
            </div>
            <div className="leading-none familia-text pl-6 md:pl-96">
              <br />
              Desfrute de momentos incríveis em<br />
              <strong>apartamentos de 69 e 82m²</strong>, com plantas flexíveis.
            </div>
          </div>

          <div className="flex justify-center align-center">
            <div className="w-full md:w-10/12 justify-center pt-64">
              <div className="box-planta flex flex-row w-auto">
                <div className="d-flex flex-col py-6">
                  <div className='col-12' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="px-12 pt-10">
                      <img src={plantas} className="max-w-max	" /></div>
                    <div className="px-4 py-4 pt-8 text-center">
                      <div className="button69 py-7 px-2 justify-center items-center " onClick={() => { moveSlide(0) }} >Planta 69m³</div>
                      <div className="button82 py-7 px-2 mt-2" onClick={() => { moveSlide(1) }} >Planta 82m³</div>
                      <div className="buttonAB py-7 px-2 mt-2" onClick={() => { moveSlide(2) }} >Duplex Torre AB</div>
                      <div className="buttonC py-7 px-2 mt-2" onClick={() => { moveSlide(3) }} >Duplex Torre C</div>
                    </div>
                  </div>
                </div>

                <div className="flex w-auto pr-8 pt-16">
                  <div className="content-center">
                    <Splide
                      ref={ref}
                      className="splide-badges col-12"
                      options={{
                        rewind: true,
                        width: '100%',
                        gap: '0rem',
                        perPage: 1,
                        pagination: isMobile,
                        arrows: !isMobile,
                      }}
                    >
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={planta68} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={planta82} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={planta82Sala} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={duplexAB1} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={duplexAB2} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={duplexC1} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={duplexC2} className="md-h-full" />
                      </SplideSlide>

                    </Splide>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <Diferencial />
        </div>
      </ScrollableAnchor>
  )
}
