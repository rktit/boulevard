import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Diferencial } from '../'

import plantas from '../../assets/file/Plantas.png'

import planta68 from '../../assets/static/planta68.jpeg'
import planta82 from '../../assets/static/planta82.jpeg'
import planta82Sala from '../../assets/static/planta82Sala.jpeg'
import duplexAB1 from '../../assets/static/duplexAB1.jpeg'
import duplexAB2 from '../../assets/static/duplexAB2.jpeg'
import duplexC1 from '../../assets/static/duplexC1.jpeg'
import duplexC2 from '../../assets/static/duplexC2.jpeg'

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

  return (
    <ScrollableAnchor id={'planta'}>
      <div className="bg-familia">
        <div className="flex flex-col pl-0 md:pl-52 pr-10 md:pr-0 py-4 md:py-0">
          <div className="familia-title pl-0 md:pl-96 pt-0 md:pt-52">
            <div className="leading-tight">
              A perfeita combinação<br />
              entre <strong>viver</strong> e se <strong>divertir</strong>!
            </div>
          </div>
          <div className="leading-none familia-text pl-0 md:pl-96">
            <br />
            Desfrute de momentos incríveis em<br />
            <strong>apartamentos de 69 e 82m²</strong>, com plantas flexíveis.
          </div>
        </div>

        <div className="flex justify-center align-center">
          <div className="w-full md:w-10/12 justify-center pt-0 md:pt-10 md:pt-64">
            <div className="box-planta flex flex-col md:flex-row w-auto md:w-4/4 m-4 md:m-8">
              <div className="d-flex flex-col px-0 md:px-6 py-6">
                <div className='col-12' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <div className="px-0 md:px-12 pt-0 md:pt-10">
                    <img src={plantas} className="max-w-max	" /></div>
                  <div className="invisible md:visible px-4 py-4 pt-8 text-center">
                    <div className="button-69 py-7 px-2 justify-center items-center " onClick={() => { moveSlide(0) }} >Planta 69m³</div>
                    <div className="button-82 py-7 px-2 mt-2" onClick={() => { moveSlide(1) }} >Planta 82m³</div>
                    <div className="button-c py-7 px-2 mt-2" onClick={() => { moveSlide(2) }} >Duplex Torre C</div>
                    <div className="button-ab py-7 px-2 mt-2" onClick={() => { moveSlide(3) }} >Duplex Torre AB</div>
                  </div>
                </div>
              </div>

              <div className="flex w-auto pr-8">
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
