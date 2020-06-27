import React, { useState } from 'react'
import Overlay from 'Components/Utilities/Overlay/Overlay'
import Flex from 'Components/Utilities/Layout/Containers/Flex'

export default function SubscribeButtonWithOverlay({ onSubmit, message, status  }) {

  const [ openDrawer, setOpenDrawer ] = useState(false)
  const [ email, setEmail ] = useState("")

  const updateEmailValue = (e) => {
    let email = e.target.value
    setEmail(email)
  }

  return (
    <>
      <button onClick={ () => { setOpenDrawer(true) } } className="btn btn-primary">Subscribe!</button>
      <div className="Drawer">
        {
          openDrawer ?
            <Overlay close={ () => {setOpenDrawer(false)} }>
              <Flex 
                alignItems="center"
                justifyContent="center"
              >
                <div>
                  <p>Sign up to our newsletter below:</p>
                  <input
                    placeholder="Your Email*"
                    onChange={updateEmailValue}
                    value={email}
                    id="email"
                    name="email"
                    type="text"
                    className="form-control text-center mb-3"
                  />
                  <div className="text-center">
                    <button onClick={() => { onSubmit(email) }} className="btn btn-primary">Sign Up!</button>
                  </div>
                  <div className="text-center">
                    <p>{message}</p>
                  </div>
                </div>
              </Flex>
            </Overlay>
            :
            ''
        }
      </div>
    </>
  )
}
