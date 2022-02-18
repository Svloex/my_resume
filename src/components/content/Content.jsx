import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import photo from "../imgSRC/photo.jpg"
import './content.css'
let Content = function (props){
    useEffect(() => {
        document.title = "Content"
    }, []);
    return(
        <div className="container">
            <div className="info">
                <img src={photo} alt="фотография: ошибка" className="avatar" />
                <div className="info_txt">
                    <h1>SEVA</h1>
                    <p>изучаю WEB</p>
                    <h3>Социальные сети</h3>
                    <a href="https://www.youtube.com/channel/UCv-6ympBXrEYuu3xNEPzoIQ" target="_blanck">
                    YouTube
                    </a> |
                    <a href="multLang.html"> undefined </a>
                </div>
            </div>
            <div className="card bg_green">
                <h2>Опыт работы</h2>
                <ol className="list">
                    <li>
                    <a>Старница из Википедии в разработке</a>
                    </li>
                    <li>
                    <Link to={'/my_resume/calculator'}>Kалькулятор</Link>
                    {/* <a href="https://svloex.github.io/Resume/calculator">Kалькулятор</a> */}
                    </li>
                    <li>
                    <a href="https://github.com/Svloex/internet-page">Веб приложение</a>
                    </li>
                </ol>
            </div>
            <div className="card bg_yellow">
                <h2>undefined</h2>
                <ol className="list">
                    <li>undefined</li>
                    <li>undefined</li>
                </ol>
            </div>
            <div className="card bg_red"> 
                <h2>ДЛЯ ПРИМЕРА</h2>
                <div className="row">
                    <div className="form_grup"><label for="">Ваше имя:</label>
                        <input type="text" placeholder="введите ваше имя"/>
                    </div>
                    <div className="form_grup"><label for="">Ваше email:</label>
                        <input type="email" placeholder="введите ваше email"/>
                    </div>
                </div>
                <div className="form_grup"> <label for="ddda">Ваше сообщение:</label>
                    <textarea name="" id="ddda" cols="15" rows="2"></textarea>
                </div>
                <input className="btn" type="submit" value="отправить"/>
            </div>
        </div>
)
}
export default Content