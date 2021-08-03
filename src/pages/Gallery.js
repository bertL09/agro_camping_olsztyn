import React from 'react'

import './Gallery.css';



export class Gallery extends React.Component {
  
  componentDidMount(){
    const lightbox = document.getElementById ('lightbox');
    document.body.appendChild(lightbox);
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        console.log(img);
        img.src = image.src;
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild);
        }
      lightbox.appendChild(img);
      })
    })
  
    lightbox.addEventListener('click', e => {
      lightbox.classList.remove('active');
    })
  }
  render() {
   
    return (

      <div className="container">


        <div className="content">
        <div className="nice_gallery">
          
            <div className="res">
              <img src={require("./pics/joga.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/1.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/background.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/champ.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/mapa kradziona.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/droga.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
            <img src={require("./pics/hipisi.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/image1.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/IMG_20200819_141401824_HDR.jpg.3c19cb2dc5b180b07a6dc0d36b72c6e5.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/niebo.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010004.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010005.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010006.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010007.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010008.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010012.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010095.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/P1010096.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/19417607_1935393333370371_7432891172646003435_o.webp").default} alt="_" className="photo"></img>
            </div>
            <div className="res">
              <img src={require("./pics/19466723_1935393403370364_8406295519760068985_o.webp").default} alt="_" className="photo"></img>
            </div>
            
            
        </div>



        </div>
        <div id="lightbox"></div>
      </div>
    )
  }



}

