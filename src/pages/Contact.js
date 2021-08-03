import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import emailjs from 'emailjs-com';

import './Contact.css'

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


export default function Contact() {
  

  const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
  
  
    useEffect(() => {

    }, [currentLanguage, t])
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_uh0peue', 'template_7m9po5v', e.target, 'user_j9Gg6avWG2nUTrE6Iupmy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

   
  return (
      
<div className="container">

  <div className="content">

    <div class="screen">
      <div class="screen-body">

        <div class="screen-body-item left">
          <div class="app-title">
            <span>{t('contact_form1')}<br></br> {t('contact_form2')}</span>
          </div>
          <a href="https://www.facebook.com/AgroCampingOlsztyn/" target="blank">
          <div className="fb"><img src={require("./pics/fb.webp").default} alt="_" className="photo"></img></div>
          </a>
          <div class="app-contact">{t('contact_info')} : +48 662 398 126</div>
          <div class="app-contact">{t('contact_info')} 2 : +48 662 398 126</div>
        </div>

        <form onSubmit = {sendEmail} >
        <div class="screen-body-item">
          
          
          <div class="app-form">
            <div class="app-form-group">
              <input name="name" class="app-form-control" placeholder={t('name')}></input>
            </div>
            <div class="app-form-group">
              <input name="email" class="app-form-control" placeholder="EMAIL"></input>
            </div>
            <div class="app-form-group">
              <input name="contact_nr" class="app-form-control" placeholder={t('contact_nr')}/>
            </div>
            <div class="app-form-group message">
              <textarea name="message" class="app-form-control" placeholder={t('message')}/>
            </div>
            <div class="app-form-group buttons">
              <input class="app-form-button" type="submit" value={t('send')} />
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
   )
    }

   
  

