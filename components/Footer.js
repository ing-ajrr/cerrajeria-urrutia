import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <footer className="footer">
        <div className="footer__content--logo">
            <Link href="/">
                <a>
                    <img src="/assets/images/logo.png" alt="Logo"/>
                </a>
            </Link>
        </div>
        <div className="footer__content--dir">
            <img className="icon" src="/assets/images/icon-direction-red.png" alt="direccion"/> Bernardo O´higgins esquina Cardenal Caro sin numero (Kiosco), Chillan
        </div>
        <div className="footer__content--phone">
            <img className="icon" src="/assets/images/icon-whatsapp.png" alt="phone"/><a href="tel:+56994149804">(+569) 94149804</a>
        </div>
        <div className="footer__content--rs">
            <a href="https://www.facebook.com/anthonyjeampier.rangelrodriguez" target="_blank"><img className="icon" src="/assets/images/icon-facebook.png" alt="Facebook"/></a>
            <a href="https://www.facebook.com/anthonyjeampier.rangelrodriguez" target="_blank"><img className="icon" src="/assets/images/icon-instagram.png" alt="Instagram"/></a>
        </div>
        <style jsx>{`
            .footer{
                width: 100%;
                height: 80px;
                background-color: #ffc300;
                border-top: 2px solid black;
                display:inline-flex;
                justify-content: center;
                align-items: center;
                font: 700 14px "Roboto",sans-serif;
                text-transform: uppercase;
            }
            .footer__content--logo{
                width: 32%;
            }
            .footer__content--logo img{
                width: auto;
                height: 80px;
            }
            .footer__content--dir{
                width: 48%;
                height: inherit;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .footer__content--phone{
                width: 20%;
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .footer__content--phone a{
                color: #000000;
                font: 700 15px "Roboto",sans-serif;
                text-transform: uppercase;
            }
            .footer__content--phone a:hover{
                color: white;
            }
            .footer__content--rs{
                width: 10%;
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: center;
                display: none;
            }
            @media only screen and (max-width: 600px){
                .footer__content--logo{
                    display: none;
                }
                .footer__content--phone{
                    width: 100%;
                }
            }
            @media only screen and (max-width: 1024px){
                .footer__content--rs{
                    display: none;
                }
                .footer__content--dir{
                    display: none;
                }
            }
            @media only screen and (min-width: 600px) and (max-width: 1024px){
                .footer__content--logo{
                    width: 70%;
                }
                .footer__content--phone{
                    width: 30%;
                }
            }
        `}</style>
    </footer>
);

export default Footer;
