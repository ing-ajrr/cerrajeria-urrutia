import React from 'react';

const Services = () => (
    <section className="services">
        <p className="services__description">
            Somos una empresa confiable y eficiente, 
            asi lo demuestra los 22 Años de Experiencia, 
            ofreciendo los siguientes servicios.
        </p>
        <div className="services__container">
            <div className="services__item">
                <img className="services__item--img" src="/assets/images/img-instalacion.jpg" alt="instalacion"/>
                <h2>Instalación de Cerraduras</h2>
                <p>
                    Ofrecemos un Servicio de Instalación de Cerraduras realizado por especialistas altamente calificados y con experiencia que se harán cargo de todo el proceso.
                </p>
            </div>
            <div className="services__item">
                <img className="services__item--img" src="/assets/images/img-apertura.gif" alt="apertura"/>
                <h2>Apertura de Cerraduras</h2>
                <p>
                    Realizamos aperturas de cerraduras de casas, departamentos y/o vehiculos
                </p>
            </div>
            <div className="services__item">
                <img className="services__item--img" src="/assets/images/img-reparacion.jpeg" alt="reparacion"/>
                <h2>Cambios de Clave</h2>
                <p>
                    Realizamos Cambios de Clave de Cerraduras realizado por especialistas altamente calificados y con experiencia que se harán cargo de todo el proceso.
                </p>
            </div>
        </div>
        <style jsx>{`
            .services{
                margin: 80px 100px;
                text-align: center;
            }
            .services__description{
                /*font-family: 'Slabo 27px', serif;*/
                font-family: 'ZCOOL XiaoWei', serif;
                font-size: 40px;
                font-weight: bold;
                margin-left: 100px;
                margin-right: 100px;
            }
            .services__container{
                /*border: 1px solid black;*/
                width: 100%;
                display: inline-flex;
            }
            .services__item{
                /*border: 1px solid black;*/
                width: 100%;
                font-family: 'Slabo 27px', serif;
                margin: 10px 20px;
                background-color: #F3F781;
                border-radius: 8px;
            }
            .services__item--img{
                width: 100%;
                height: 200px;
                border-radius: 8px;
                background-size: cover;
            }
            .services__item p{
                text-align: justify;
                margin: 0 10px 10px 10px;
            }
        
            @media only screen and (max-width: 800px){
                .services__description{
                    font-size: 20px;
                }
                .services__container{
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                .services__item{
                    margin: 0 auto 10px auto;
                    width: 280px;
                }
            }
            @media only screen and (max-width: 1024px){
                .services{
                    margin: 50px 10px;
                }
                .services__description{
                    margin: 10px 10px;
                }
            }
            @media only screen and (min-width: 801px) and (max-width: 1024px){
                .services__item{
                    margin: 10px 5px;
                }
            }
        `}</style>
    </section>
);

export default Services;
