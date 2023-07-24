const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");


const Footer = (props) => {

    return <>
        <footer>
            <div className='container '>
                <div className='row'>
                    <div className='company col-12'>
                        <div className='company__about row  col-4 text-center'>
                            <h4>Компания</h4>
                            <ul>
                                <li className="text-center"><a href="#">Политика конфиденциальности</a></li>
                                <li className="text-center"><a href="#">Рекламодателям</a></li>
                                <li className="text-center"><a href="#">Пользовательское соглашение</a></li>
                            </ul>
                        </div>
                        <div className='company__services row  col-4 text-center'>
                            <h4>Сервис и Помощь</h4>
                            <ul>
                                <li className="text-center"><a href="#">Как получить скидку</a></li>
                                <li className="text-center"><a href="#">Приложение скидок и акций</a></li>
                                <li className="text-center"><a href="#">Способы оплаты</a></li>
                            </ul>
                        </div>
                        <div className='company__connection row  col-4 col-xs-12 text-center' >
                            <h4>Контакты</h4>
                            <ul>
                                <li className="text-center">  <a className='company__connection__telephone' href="tel:+375296082222">+375 (29) 608 22 22</a> </li>
                                <li className="text-center">  <a className='company__connection__telephone' href="tel:+375295082222">+375 (29) 508 22 22</a></li>
                                <li className="text-center">  <a className='company__connection__telephone' href="tel:+375298084444">+375 (29) 508 44 44</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}

module.exports = connect(null, { push })(Footer);