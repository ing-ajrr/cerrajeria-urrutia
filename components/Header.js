import Link from 'next/link';

export default class Header extends React.Component {
    render(){
        return <div>
            <header className="header">
                <div className="header__top">
                    <div className="header__top--info">
                        <div className="header-dir">
                            <img className="icon" src="/assets/images/icon-direction-red.png" alt="direccion"/> Bernardo O´higgins esquina Cardenal Caro sin numero (Kiosco), Chillan
                        </div>
                        <div className="header-phone">
                            <img className="icon" src="/assets/images/icon-whatsapp.png" alt="phone"/><a href="tel:+56994149804">(+569) 94149804</a>
                        </div>
                        <div className="header-hour">
                            <img className="icon" src="/assets/images/icon-hour.png" alt="hour"/>Disponible las 24 Horas del Dia
                        </div>
                    </div>
                    <div className="header__top--rs">
                        <a href="https://www.facebook.com/anthonyjeampier.rangelrodriguez" target="_blank"><img className="icon" src="/assets/images/icon-facebook.png" alt="Facebook"/></a>
                        <a href="https://www.facebook.com/anthonyjeampier.rangelrodriguez" target="_blank"><img className="icon" src="../assets/images/icon-instagram.png" alt="Instagram"/></a>
                    </div>
                </div>
                <div className="header__content">
                    <Link href="/">
                        <a className="header__content--logo">
                            <img src="/assets/images/logo.png" alt="Logo"/>
                        </a>
                    </Link>
                </div>
            </header>
            <style jsx>{`
                .header{
                    background-color: white;
                    width: 100%;
                    height: 120px;
                    border-bottom: 2px solid #ffc300;
                }
                .header__top{
                    background-color: #ffc300;
                    border-bottom: 2px solid #1b1b1b;
                    /*color: #777;*/
                    color: #000000;
                    width: 100%;
                    height: 40px;
                    display:flex;
                    justify-content: space-around;
                    font: 700 11px/15px "Roboto",sans-serif;
                    text-transform: uppercase;
                }
                .header__top--info{
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                }
                .header-phone{
                    display: inline-flex;
                    align-items: center;
                    height: 40px;
                }
                .header-phone a{
                    color: #000000;
                    font: 700 14px "Roboto",sans-serif;
                    text-transform: uppercase;
                }
                .header-phone a:hover{
                    color: white;
                }
            
                .header__content{
                    display: flex;
                    justify-content: center;
                }
                .header__content--logo img{
                    width: auto;
                    height: 80px;
                }
                .header-dir{
                    display: inline-flex;
                    align-items: center;
                    margin-right: 5px;
                    height: 40px;
                }
                .header-hour{
                    display: inline-flex;
                    align-items: center;
                    height: 40px;
                }
                .header__top--rs{
                    display: flex;
                    align-items: center;
                    height: 40px;
                    display: none;
                }
                .header__top--rs a{
                    height: 30px;
                }
                .header__top--rs a:hover{
                    height: 35px;
                }
            
                @media only screen and (max-width: 600px){
                    .header-hour{
                        display: none;
                    }
                }
                @media only screen and (max-width: 1024px){
                    .header__top--rs{
                        display: none;
                    }
                    .header-dir{
                        display: none;
                    }
                }
            `}</style>
        </div>
    }
}
