import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import utils from '../../utils'

import galeria from '../../assets/file/Galeria.png'
import boulevard from '../../assets/logo/boulevard.png'

import foto1 from '../../assets/static/Foto1.png'
import foto2 from '../../assets/static/Foto2.png'
import foto3 from '../../assets/static/Foto3.png'
import foto4 from '../../assets/static/Foto4.png'
import foto5 from '../../assets/static/Foto5.png'
import foto6 from '../../assets/static/Foto6.png'
import foto7 from '../../assets/static/Foto7.png'
import foto8 from '../../assets/static/Foto8.png'
import foto9 from '../../assets/static/Foto9.png'
import foto10 from '../../assets/static/Foto10.png'
import foto11 from '../../assets/static/Foto11.png'
import foto12 from '../../assets/static/Foto12.png'
import foto13 from '../../assets/static/Foto13.png'
import foto14 from '../../assets/static/Foto14.png'
import foto15 from '../../assets/static/Foto15.png'
import foto16 from '../../assets/static/Foto16.png'
import foto17 from '../../assets/static/Foto17.png'
import foto017 from '../../assets/static/Foto-17.png'
import foto18 from '../../assets/static/Foto18.png'
import foto19 from '../../assets/static/Foto19.png'
import foto20 from '../../assets/static/Foto20.png'
import foto21 from '../../assets/static/Foto21.png'
import foto22 from '../../assets/static/Foto22.png'
import foto23 from '../../assets/static/Foto23.png'
import foto24 from '../../assets/static/Foto24.png'
import foto25 from '../../assets/static/Foto25.png'
import foto26 from '../../assets/static/Foto26.png'
import foto27 from '../../assets/static/Foto27.png'
import foto28 from '../../assets/static/Foto28.png'
import foto29 from '../../assets/static/Foto29.png'
import foto30 from '../../assets/static/Foto30.png'
import foto31 from '../../assets/static/Foto31.png'
import foto32 from '../../assets/static/Foto32.png'
import foto33 from '../../assets/static/Foto33.png'
import { TextCenter } from 'react-bootstrap-icons'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto017,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27,
    foto28,
    foto29,
    foto30,
    foto31,
    foto32,
    foto33,
  ];

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

  const renderImg = (value) => {
    return (
      <SplideSlide className="d-flex justify-center items-center" style={{ display:'flex', alignSelf: 'center' }}>
        <img src={value} className="w-auto md:w-3/5 pt-2 px-1" />
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-fotos pt-14 pb-24">

        <div className="flex flex-col justify-items-center items-center">
          <div className="pr-32 pb-8 ">
            <img src={galeria} className="absolute w-48" />
          </div>
          <div className="px-10">
            <img src={boulevard} width="500" />
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-12'>
            <Splide
              className="splide-badges col-12"
              options={{
                rewind: true,
                width: 'auto',
                height: '100%',
                gap: '0rem',
                perPage: 1,
                pagination: false,
                arrows: true,
              }}
            >
              {arrayFotos.map(el => { return (renderImg(el)) })}
            </Splide>
          </div>
          <div className='col-12'>
            <div className="p-5 col-12 fotos-text">
              São mais de <strong>20 opções</strong> de lazer para potencializar <br />
              a <strong>qualidade</strong> de vida da sua <strong>família</strong>.
            </div>
            <div className="w-full flex justify-center pb-10 pl-14 md:pl-4 pr-14 md:pr-4">
              <button
                onClick={() => window.modalModal()}
                className="w-96 md:w-1/4 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
              > Visite o decorado
              </button>
            </div>
          </div>
        </div>
      </div>

      :
      <ScrollableAnchor id={'fotos'}>
        <div className="bg-fotos pt-14 pb-32 md:pb-64">

          <div className="flex flex-col justify-items-center items-center pb-10">
            <div className="pr-32 md:pr-44 pb-8 md:pb-12">
              <img src={galeria} className="absolute w-48 md:w-72 " />
            </div>
            <div className="px-10 md:px-0">
              <img src={boulevard} width="500" />
            </div>
          </div>

          <div class="transition duration-150 ease-out hover:ease-in">
            <div className="flex-col px-4 md:px-20">

              <div className="flex">
                <img src={foto1} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto2} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto3} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto4} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto5} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto6} className="w-auto md:w-full pt-2 px-1" />
              </div>

              <div className="flex">
                <img src={foto7} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto8} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto9} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto10} className="w-auto md:w-2/5 pt-2 px-1" />
              </div>

              <div className="flex">
                <img src={foto11} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto12} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto13} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto14} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto15} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto16} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto17} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto017} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto18} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto19} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto20} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto21} className="w-auto md:w-2/5 pt-2 px-1" />
              </div>

              <div className="flex">
                <img src={foto22} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto23} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto24} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto25} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto26} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto27} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto28} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto29} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto30} className="w-auto md:w-full px-1 pt-2" />
              </div>

              <div className="flex">
                <img src={foto31} className="w-auto md:w-3/5 pt-2 px-1" />
                <img src={foto32} className="w-auto md:w-2/5 pt-2 px-1" />
                <img src={foto33} className="w-auto md:w-full px-1 pt-2" />
              </div>
            </div>
          </div>


          <div className="fotos-text pt-12">
            São mais de <strong>20 opções</strong> de lazer para potencializar <br />
            a <strong>qualidade</strong> de vida da sua <strong>família</strong>.
          </div>
          <div className="w-full flex justify-center mt-6 md:mt-12 pl-14 md:pl-4 pr-14 md:pr-4">
            <a
              // onClick={() => window.modalModal()}
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519974139043"
              className="w-96 md:w-1/4 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
            > Visite o decorado
            </a>
          </div>
        </div>
      </ScrollableAnchor>
  )
}
