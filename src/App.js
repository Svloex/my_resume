
import './App.css';

function App() {
  return (
    <div >
    <div class="container">
        <div class="info">
            <img src="photo.jpg" alt="фотография: ошибка" class="avatar" />
            <div class="info_txt">
                <h1>SVLOEX</h1>
                <p>Я сооснователь своей жизни</p>
                <p>Люблю жизнь</p>
                <h3>Социальные сети</h3>
                    <a href="https://www.youtube.com/channel/UCv-6ympBXrEYuu3xNEPzoIQ" target="_blanck">
              YouTube
            </a>|
                    <a href="multLang.html"> multLang </a>
            </div>
        </div>
        <div class="card bg_yellow">
            <h2>Мои хбби</h2>
            <ol class="list">
                <li>видео_контент</li>
                <li>сериалы</li>
            </ol>
        </div>
        <div class="card bg_green">
            <h2>Опыт работы</h2>
            <ol class="list">
                <li>
                    <a href="file:///C:/Users/user/Desktop/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/special_folder/%D0%94%D0%97/svloex/Houston.html"> Старница из Википедии</a>
                </li>
                <li>
                    <a href="file:///C:/Users/user/Desktop/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/special_folder/%D0%94%D0%97/web/%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D0%B5%D0%B9%D1%82/%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80/index.html">Kалькулятор</a>
                </li>
                <li>
                    <a href="https://svloex.github.io/internet-page/">Веб приложение</a>
                </li>
            </ol>
        </div>
        <div class="card bg_red">
            <h2>Не надо связываться со мной</h2>
            <div class="row">
                <div class="form_grup"><label for="">Ваше имя:</label>
                    <input type="text" placeholder="введите ваше имя"/></div>
                <div class="form_grup"><label for="">Ваше email:</label>
                    <input type="email" placeholder="введите ваше email"/></div>
            </div>
            <div class="form_grup"> <label for="ddda">Ваше сообщение:</label>
                <textarea name="" id="ddda" cols="15" rows="2"></textarea></div>
            <input class="btn" type="submit" value="отправить"/>
        </div>
        <div>
            <table border="2">
                <tr>глава</tr>
                <td>пункт</td>
                <td>пункт2</td>
            </table>
        </div>
    </div>
    </div>
  );
}

export default App;
