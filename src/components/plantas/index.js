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

import apto68 from '../../assets/file/apto-68.png'
import apto82 from '../../assets/file/apto-82.png'
import torreC from '../../assets/file/duplex-torreC.png'
import torreAB from '../../assets/file/duplex-torreAB.png'
import implantacao from '../../assets/file/implantacao.png'

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
        <div className="flex flex-col pl-0 md:pl-52 py-4 md:py-0">
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
          <div className="w-full md:w-10/12 justify-center pt-10 md:pt-64">
            <div className="box-planta flex flex-col md:flex-row w-auto md:w-4/4 m-4 md:m-8">
              <div className="d-flex flex-col pr-4 md:pr-0 pl-4 md:pl-10">
                <div className='col-12' style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                  <img src={plantas} className="w-72 md:w-64 pt-8 md:pt-14 md:pl-0" />
                  <img src={apto68} className="pt-10 box-botao w-100" onClick={() => {moveSlide(0)}} />
                  <img src={apto82} className="pt-4 box-botao w-100" onClick={() => {moveSlide(1)}} />
                  <img src={torreC} className="pt-4 box-botao w-100" onClick={() => {moveSlide(2)}} />
                  <img src={torreAB} className="pt-4 box-botao w-100" onClick={() => {moveSlide(3)}} />
                  <img src={implantacao} className="pt-4 box-botao w-100" onClick={() => {moveSlide(4)}} />
                </div>
              </div>

              <div className="flex w-auto md:w-full">
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
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={planta68} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={planta82} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={planta82Sala} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={duplexAB1} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={duplexAB2} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={duplexC1} className="md-h-full"/>
                    </SplideSlide>
                    <SplideSlide className="justify-center items-center" style={{display:'flex', alignSelf: 'center'}}>
                      <img src={duplexC2} className="md-h-full"/>
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
