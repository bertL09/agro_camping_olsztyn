import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const languages = [
    {
      code: 'de',
      name: 'Deutsche',
      country_code: 'de',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'pl',
      name: 'Polski',
  
      country_code: 'pl',
    },
  ]




export default function Navbar() {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
  
  
    useEffect(() => {

    }, [currentLanguage, t])
  return (
      
    
    

      <nav id="navbar">
        <div className="logo"></div>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li><NavLink to ={"/"}exact
          activeStyle={
            { color:'#98c8ce'}
          }
          >
            {t('home_page')}
          </NavLink></li>
          <li><NavLink to ={"/Gallery"} exact
          activeStyle={
            {color:'#98c8ce'}
          }>
            {t('gallery')}
          </NavLink></li>

          <li><NavLink to ={"/Contact"}exact
          activeStyle={
            {color:'#98c8ce'}
          }>
            {t('contact')}
          </NavLink></li>
        </ul>

        <div className="language-select">


          <ul>

            {languages.map(({ code,  country_code }) => (
              <li key={country_code}>
                <button

                  onClick={() => i18next.changeLanguage(code)}
                  disabled={code === currentLanguageCode}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code}`}
                    style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                  ></span>

                </button>
              </li>
            ))}
          </ul>

        </div>

      </nav>

   
  )
}
