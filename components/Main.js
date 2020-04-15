import React from 'react';
const Main = () => (
    <section className="main">
        <div className="main__container">
            <img className="main__container--img" src="/assets/images/img-llaves.jpg" alt="principal"/>
            <div className="main__container--content">
                <h1>Cerrajeros Urrutia</h1>
                <span className="main-container-content__span">Tu Cerrajeria en Chillan</span>
                <div>
                    <h2>Contáctanos Llamando al</h2>
                    <a className="phone" href="tel:+56994149804">(+569) 94149804</a>
                </div>
                <h3>Más de 22 Años de Experiencia</h3>
            </div>
        </div>
        <style jsx>{`
            .main {
                width: 100%;
                background-color: #ffc300;
                height: 450px;
            }
            .main__container{
                height: inherit;
                margin: 0px 80px;
                position: absolute;
            }
            .main__container--img{
                width: 100%;
                height: inherit;
                background-size: cover;
                border-radius: 8px;
                opacity: 0.8;
            }
            .main__container--content{
                position: absolute;
                left: 0;
                top:0;
                right: 0;
                font-family: 'Merriweather', serif;
            }
            .main__container--content h1{
                padding-right: 20px;
                font-size: 80px;
                color: #ffc300;
                background: black;
                font-family: inherit;
                text-align: right;
                margin: 30px 0 0 0;
            }
            .main-container-content__span{
                display:block;
                padding-right: 20px;
                color: #ffc300;
                background-color: black;
                font-size: 20px;
                margin: 0 0 66px 0;
                text-align: right;
                font-family: 'Merriweather', serif;
            }
            .main__container--content div{
                background: black;
                margin-left: 120px;
                margin-bottom: 66px;
                padding: 10px 0;
                padding-right: 20px;
                text-align: right;
            }
            .main__container--content div>h2{
                color: #ffc300;
                font-size:18px;
                font-family: inherit;
                text-align: right;
                margin: 0;
                margin-bottom: 5px;
            }
            .main__container--content h3{
                color: #ffc300;
                background: black;
                margin: 0;
                margin-left: 240px;
                padding: 10px 0;
                text-align: right;
                padding-right: 20px;
                font-family: inherit;
            }
        
            @media only screen and (max-width: 600px){
                .main__container{
                    margin: 0px 15px;
                }
                .main__container--content h1 {
                    font-size: 3em;
                }
                .main__container--content div {
                    margin-left: 20px;
                }
                .main__container--content h3 {
                    margin-left: 40px;
                }
            }
            @media only screen and (min-width: 600px) and (max-width: 1024px){
                .main__container--content h1 {
                    font-size: 60px;
                }
            }
        `}</style>
    </section>
);
export default Main;
