
import React, { useEffect, useState } from 'react'

import whats from '../../assets/icon/whatsapp.png'

export default function Page(props) {
  return (
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
  )
}
