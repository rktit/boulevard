import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'


export default function Page(props) {
  return (
    <ScrollableAnchor id={'conceito'}>
      <div className="bg-conceito w-full">
        <Fade duration={2000}>
          <div className="py-24 px-6 md:px-0">
          <div className="text-center font-lg md:font-big pb-2 md:pb-0">
              <strong>Um novo conceito de viver bem, em Santa Bárbara.</strong>
              <br/>
            </div>
            <div className="text-center font-regular md:font-lg">
              Uma forma que combina modernidade, amplitude e <br/>
              infraestrutura completa para morar.
            </div>
            
          </div>


        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
