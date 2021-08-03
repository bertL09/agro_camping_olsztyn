import Navbar from './components/Navbar'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import cookies from 'js-cookie'
import {
  BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom"
import { Gallery } from './pages/Gallery'
import  Contact  from './pages/Contact'
import Footer from './components/Footer'
import emailjs from 'emailjs-com';



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


export default function App() {
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
    <Router>

< Navbar />

<Route path="/" exact strict render={
  ()=>{
    return(    
  <div className="container">
    <div className="content">
      
      <div className="main_page_txt">
        <div className="bg_logo"><img src={require("./pic/logo.webp").default} alt="_"></img></div>
        <div className="txtt">
          {t('main_page')}
        </div>
      </div>
      <div className="description">
        <div>Agro Camping Olsztyn<br></br>Młodzieżowa 1 11-041 <br></br> Olsztyn warmińsko-mazurskie</div>                
        <div>{t('contact_info')} : +48 662 398 126</div>
        <div>{t('contact_info2')} : +48 662 398 126</div>
      </div>

      <div className="map-wraper">
        <iframe title=" mapka" className="google_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.132571453234!2d20.399074315855124!3d53.787127980073805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27e4d0e1bfad9%3A0xb3e6e977a2cb3c30!2sAgro%20Camping%20Olsztyn!5e0!3m2!1spl!2spl!4v1625574487941!5m2!1spl!2spl"></iframe>
      </div>

      <div class="screen">
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>{t('contact_form1')}<br></br> {t('contact_form2')}</span>
            </div>
            <a href="https://www.facebook.com/AgroCampingOlsztyn/" target="blank">
              <div className="fb"><img src={require("./pic/fb.webp").default} alt="_" className="photo"></img></div>
            </a>
            <div class="app-contact">{t('contact_info')} : +48 662 398 126</div>
            <div class="app-contact">{t('contact_info2')} : +48 662 398 126</div>
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
      
      <table className="cennik_table">
        <tr>
          <td ></td>
          <td></td>
          <td>{t('price')}</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/couple-of-man-and-woman.webp").default} alt="_"></img></td>
          <td>{t('adult')}</td>
          <td>15zł</td>
        </tr>
        <tr>
          <td className="piktogram"><img src={require("./pic/sister-and-brother.webp").default} alt="_"></img></td>
          <td>{t('child')}</td>
          <td>10zł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/camper.webp").default} alt="_"></img></td>
          <td>{t('camper')}</td>
          <td>30zł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/car.webp").default} alt="_"></img></td>
          <td>{t('car')}</td>
          <td>12zł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/tent_small.webp").default} alt="_"></img></td>
          <td>{t('two_person_tent')}</td>
          <td>12ł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/tent_big.webp").default} alt="_"></img></td>
          <td>{t('big_tent')}</td>
          <td>20zł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/motorcycle.webp").default} alt="_"></img></td>
          <td>{t('motorbike')}</td>
          <td>7zł</td>
        </tr>
        <tr>
        <td className="piktogram"><img src={require("./pic/flash.webp").default} alt="_"></img></td>
          <td>{t('electricity')}</td>
          <td>15zł</td>
        </tr>
      </table>

    </div>
  </div>
)
}
}/>
<Footer/>

<Route path="/Gallery" exact strict render={
  ()=>{
    return(<Gallery/>)
    }
}/>

<Route path="/Contact" exact strict render={
  ()=>{
    return(<Contact/>)
    }
}/>
</Router>
)
}
 