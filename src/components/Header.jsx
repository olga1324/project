const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");
const { BiMenu } = require("react-icons/Bi");
const { useState } = require("react");
const { GrClose } = require("react-icons/gr");
const { ImEnter } = require("react-icons/im")

const Header = (props) => {
    const [nav, setNav] = useState(false);

    return <>
        <header>
            <div className="container">
                <div className="menu">
                    <div className="logo mb-2  float-start " onClick={() => { props.push("/") }}></div>
                    <ul className="menu__page mb-9  md-8 float-end ">
                        <li onClick={() => { props.push("/blog") }}> Новые акции</li>
                        <li onClick={() => { props.push("/form") }}> Разместить свою акцию</li>
                        <ImEnter className={`enter-button`} onClick={() => { props.push("/signup") }} />
                    </ul>
                    <div className='presentation mb-12 float-start'></div>
                </div>

                <div className="mobile__menu" >
                    <div className="">
                        <div className="mobile__menu__content" >
                            <div>
                                <div className="logo  float-start " onClick={() => { props.push("/") }}></div>
                                <div onClick={() => setNav(!nav)} className="menu_burger float-end">
                                    {nav ? <GrClose size={30} /> : <BiMenu size={30} />}
                                </div>
                            </div>
                            <div className="mobile__menu__page " >
                                <ul className={nav ? 'mabile__menu__page active' : 'mobile__menu__page'}>
                                    <li onClick={() => { props.push("/") }}>Главная</li>
                                    <li onClick={() => { props.push("/blog") }}>Новые акции</li>
                                    <li onClick={() => { props.push("/form") }}>Разместить свою акцию</li>
                                    <li onClick={() => { props.push("/signup") }}> Кабинет</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
}

module.exports = connect(null, { push })(Header);


