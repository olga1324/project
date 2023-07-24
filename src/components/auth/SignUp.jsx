const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const SignUp = (props) => {
   
    return <>
        <div className="container d-flex justify-content-center align-items-center"
     >
            <div className="card p-5 auth">
                <h3 className="m-auto">Авторизация</h3>
                   <form className="d-flex flex-column">
                    <div className="mt-3">
                        <label htmlFor="title" className="form-label">Введите ваш логин...</label>
                        <input type="text" className="form-control" id="title"  />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="title" className="form-label">Введите ваш пароль...</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="d-flex justify-content-between mt-3 ">
                        <div className="card__question">
                            Нет аккаунта?   <div  className ="registration" onClick={() => { props.push("/signin") }}>
                                Зарегистрируйся!
                            </div>
                        </div>
                    <div>
                        <button type="button" class="btn btn-info  float-end">Войти</button>
                    </div></div>
                    
           </form> 
               </div>
           
        </div>
    </>
};

module.exports = connect(null, { push })(SignUp);
