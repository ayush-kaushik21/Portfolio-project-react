import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className='navabr-container'>
        <div className='row nav-bg'>
          <div className='col-md-10 mx-auto spacing '>
            <nav className='navbar navbar-expand-lg  '>
              <div className='container-fluid'>
                <a className='navbar-brand brand-style' href='#'>
                  <span className='header-style'>New</span> Horizon
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: 'white', fontSize: '2rem' }}
                  />
                </button>
                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        aria-current='page'
                        href='#'
                      >
                        Home
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        About Me
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Services
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Experience
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Portfolio
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
