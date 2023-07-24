const React = require("react");
const connect = require("react-redux").connect;
const { ADD_SHOP } = require("../actions/actions.jsx");


const FormAdd = (props) => {
    let [data, setData] = React.useState({
        title: "",
        description: "",
        img: ""
    })

    let [formError, setFormError] = React.useState({
        title: "",
        description: "",
        img: ""
    });

    function validate() {
        let isValid = true;
        if (data.title == "") {
            formError.title = "Введите название";
            isValid = false;
        }
        if (data.description == "") {
            formError.description = "Введите описание товара";
            isValid = false;
        }
        if (data.img == "") {
            formError.img = "Добавьте картинку";
            isValid = false;
        }
        setFormError({ ...formError });
        return isValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()) {
            return false;
        }
        props.onShopAdd(data);
        setData({
            title: "",
            description: "",
            img: ""
        });
        props.history.push("/blog")
    }

    function handleTitleChange(event) {
        setData({ ...data, title: event.target.value })
    }

    function handleDescriptionChange(event) {
        setData({ ...data, description: event.target.value })
    }

    function handleImgChange(event) {
        setData({ ...data, img: event.target.value })
    }

    return (<>
        <div className="container">
            <div className=" p-5 post__add">
                <h5 >Добавить акцию :</h5>
                <form className="blog_form col-12" action="" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="name" >Название акции</label>
                        <input type="text" className="form-control " id="title" value={data.title} onChange={handleTitleChange} />
                        {formError.title != "" && <div className="error">{formError.title}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="name">Условия проведения</label>
                        <textarea className="form-control " id="text" rows="3" value={data.description} onChange={handleDescriptionChange} />
                        {formError.description != "" && <div className="error">{formError.description}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="name">Картинка</label>
                        <input type="text" className="form-control " id="image" value={data.img} onChange={handleImgChange} />
                        {formError.img != "" && <div className="error">{formError.img}</div>}
                    </div>
                    <div className=" mb-3">
                        <button type="submit" className="btn send">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onShopAdd: (shop) => {
        dispatch({
            type: ADD_SHOP, shop
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormAdd);