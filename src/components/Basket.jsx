const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");


const Basket = (props) => {

    return <>
        <div className="container d-flex justify-content-center align-items-center"
        >
            <div className="card_basket p-5 basket ">
                <h3 className="">Получить промокод</h3>
                <form className="d-flex flex-column">
                    <div className="mt-3 email">
                        <label htmlFor="title" className="form-label">Введите ваш email...</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <h5 className=" ">Выберите форму оплаты:</h5>
                    <div className="button__group ">
                        <div>
                            <button type="button" class="btn btn-info balans col-6 float-start">СПИСАТЬ С БАЛАНСА</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-info bank  col-6 float-end" >БАНКОВСКАЯ КАРТА</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-info erip  col-6 float-start" >ЕРИП</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-info sms  col-6 float-end" >SMS (IPAY)</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-info mts  col-6 float-start" >МТС-ДЕНЬГИ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
};

module.exports = connect(null, { push })(Basket);









