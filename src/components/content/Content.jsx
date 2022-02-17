import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
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
                    <a href="file:///C:/Users/user/Desktop/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/special_folder/%D0%94%D0%97/svloex/Houston.html">Старница из Википедии в разработке</a>
                    </li>
                    <li>
                    <Link to={'/https://svloex.github.io/my_resume/calculator'}>Kалькулятор</Link>
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