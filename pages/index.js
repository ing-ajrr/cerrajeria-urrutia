import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import Footer from '../components/Footer'
export default class extends React.Component {
    render() {
        return <div className="App">
            <Head>
                <title>Cerrajeria Urrutia en Chillan - +56 9 40471242</title>
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet"/>
                <meta name="google-site-verification" content="iu909cYaCKOi5ZLqDKmt0fJDkxQjcEs_yjqliCPrdzI"/>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta name="description" content="Cerrajeria Urrutia, estamos en chillan, disponibles las 24 horas del dia."/>
            </Head>
            <Header/>
            <Main />
            <Services />
            <Footer />
            <style jsx global>{`
                body{
                    margin:0;
                }
                a{
                    cursor: pointer;
                    text-decoration: none;
                }
                .icon{
                    width: 30px;
                    height: 30px;
                    padding-right: 10px;
                }
                .phone{
                    border: 1px solid #ffbf00;
                    padding: 5px 10px;
                    border-radius: 8px;
                    background-color: #4a3e1e;
                    color: #ffbf00;
                    line-height: 1;
                    font-weight: bold;
                    font-size: 18px;
                }    
            `}</style>
        </div>
    }
}