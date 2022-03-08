import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import exclusivo from '../../assets/file/exclusivo.png'

export default function Page(props) {
    return (
        <ScrollableAnchor id={'mapa'}>
            <div className="flex bg-exclusivo">
                <Fade duration={2000}>
                    <div className="w-auto md:w-full flex flex-col py-8 md:py-16 px-4 md:px-0 items-center">

                        <div className="justify-center ">
                            <img src={exclusivo} className="w-5/8 md:w-4/5 pl-2 md:pl-52" />
                        </div>
                        <div className="font-regular md:font-big justify-items-center px-4 md:px-0 pt-4 md:pt-0">
                            <strong>Comodidade em serviços Pay Per Use (Pague quando usar).</strong>
                        </div>
                        <div className="font-medium md:font-regular pt-4 text-center px-4 md:px-0">
                            Sistema de serviços para facilitar o seu dia a dia, como: manutenção,<br />
                            limpeza, pet care, motorista, arquitetura, entre outros. Pague apenas pelo o que utilizar.
                        </div>

                        <div className="w-full flex justify-center mt-10 px-8 md:px-0">
                            <button
                                onClick={() => window.modalModal()}
                                className="w-full md:w-1/4 flex justify-center py-3 px-4 mt-4 border border-transparent text-sm font-medium rounded-lg text-white button-cadastro"
                            > Saiba Mais
                            </button>
                        </div>


                    </div>


                </Fade>
            </div>
        </ScrollableAnchor>
    )
}
