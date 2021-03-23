import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js'
const Header = () => {
  return (
    <>
      <div className='wrapper'>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 6,
                  color: '#f9ab00',
                },
              },
            },
          }}
        />
        <div className='content d-flex flex-column justify-content-center align-items-center'>
          <h1>Web Development and website promoions</h1>
          <Typed
            className='typed-text'
            strings={[
              'Web Development',
              'Web Design',
              'Facebook Ads SMM',
              'Google Ads',
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <button className='btn-contact'>Contact Me</button>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Header
