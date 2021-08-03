 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import './components/Navbar';
 import App from './App';
 import i18n from "i18next";
 import LanguageDetector from 'i18next-browser-languagedetector';
 import HttpApi from 'i18next-http-backend';
 import { initReactI18next } from "react-i18next";
 import 'flag-icon-css/css/flag-icon.css';

 i18n
   .use(initReactI18next)
   .use(HttpApi)
   .use(LanguageDetector)
   .init({
     supportedLngs: ['en', 'pl', 'de'],
     fallbackLng: "en",
     detection: {
       order: ['cookie','path','htmlTag',  'localStorage',  'subdomain'],
       caches: ['cookie'],
     },
     backend: {
       loadPath: 'asets/locales/{{lng}}/translation.json',
     },
     react: { useSuspense: false },
   });


   
 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 );
